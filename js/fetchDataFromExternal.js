
function fetchDataFromExternal(mode, query, page) {

    var url = 'http://api.themoviedb.org/3/';
    var key = '?api_key=470fd2ec8853e25d2f8d86f685d2270e';

    if(testEmpty(window.configData)){
        setConfig(url, key);
    }

    if(testEmpty(query)){
        query = '';
    }

    if(testEmpty(page)){
        page = '';
    }

    window.currentQuery = query;
    window.currentMode = mode;

    $.ajax({
        url: url + mode + key + query + page,
        async:false,
        dataType: 'jsonp',
        success: function(data) {
            parseResults(data);
        },
        statusCode: {
            503: function() {
                alert( "Sorry, you have exceed the no. of search limit. Please see the home page for more details." );
            },
            500: function() {
                alert('A server-side error has occurred or service is temporarily unavailable');
            },
            404: function() {
                alert('Could not contact server the server.');
            }
        },
        timeout: 10000,
        error: function(x, t, m) {
            if(t==="timeout") {
                alert("Oh noes, timeout error! Maybe due to sluggish Internet connection?");
            } else {
                alert(" This is embarrassing, some error occured :-(. Please try again in some time.");
            }
        }
    });

}

function setConfig(url, key)
{
    var configMode = 'configuration';

    $.ajax({
        async:false,
        url: url + configMode + key,
        dataType: 'jsonp',
        success: function(data) {
            setConfigData(data);
        }
    });
}


function setConfigData(data) {

    window.configData = data;
}

function parseResults(data) {

    // clear out the results area
    $('section#feature_area').empty();
    $('section.page_number_info').empty();

    if(data.results.length == 0){
        $('section#feature_area').append("<article id='errorMsg'></article>");
        $('article#errorMsg').css('padding', '12px');
        $('article#errorMsg').html('<p><strong class="importantNote">Sorry, we didn\'t find any results matching your query.<strong><p>');
        return;
    }

    if(data.results.length >2){
        //show back to top
        $('div#top a').css('visibility', 'visible');
    }
    var base_url = 'http://d3gtl9l2a4fn1j.cloudfront.net/t/p/';
    var image_size = 'w92';
    if(!testEmpty(window.configData)){
        base_url = window.configData.images['base_url'];
        image_size = window.configData.images['poster_sizes'][0];
    }

    var url = base_url + image_size;

    for(var i = 0; i<data.results.length; i++) {

        var image = data.results[i].poster_path;
        var image_path = url + image;
        if(image == null){
            image_path = 'images/no-poster-w92.jpg';
        }
        var movie_name = data.results[i].original_title;
        var release_date = data.results[i].release_date;
        var vote_average = data.results[i].vote_average;
        var vote_count = data.results[i].vote_count;

        var imgstr = '<img src="' + image_path + '" class=" clearfix movieImageStyle" />';

        var infostr = '<p class="movie_name">' + movie_name+ '</p>' +
                      '<p>Release Date: '+release_date+'<br>' +
                      'Avg. Rating: '+ vote_average + '<br>' +
                      'Avg. Rating: '+ vote_average + '<br>' +
                      'Total no. of votes: '+vote_count+'</p>';

        var datastr = '<div class="clearfix movieInfoStyle">'+infostr+'</div>';

        var articlestr = "<article class='clearfix movieArticleStyle box shadow_effect'>"+imgstr+ datastr+ "</article>";
        $('section#feature_area ').append(articlestr);
    }
    $('section.page_number_info').css('visibility', 'visible');
    window.currentPage = data.page;
    var pages = data.total_pages;
    $('section.page_number_info').html('Displaying results for: <span class = "current_search">' + window.currentSearch + '</span> ');
    $('section.page_number_info').append('<span class="page_link">Page: ' + window.currentPage + ' of '+ pages+'</span> ');
    if(currentPage>1){
        $('section.page_number_info').append('<a class="previous_page" href="#">previous </a> ||');
    }
    else{
        $('section.page_number_info').append('previous ||');
    }

    if(currentPage< data.total_pages)
    {
        $('section.page_number_info').append('<a class="next_page" href="#">next </a> ');
    }
    else {
        $('section.page_number_info').append('next');
    }
}

$(document).on("click",".previous_page", function (event) {
    event.preventDefault();
    var pageNum = window.currentPage - 1;
    var pageQuery = '&page='+ pageNum;
    fetchDataFromExternal(window.currentMode, window.currentQuery + pageQuery);

});

$(document).on("click",".next_page", function (event) {
    event.preventDefault();
    var pageNum = window.currentPage + 1;
    var pageQuery = '&page='+ pageNum;
    fetchDataFromExternal(window.currentMode, window.currentQuery + pageQuery);
});

function testEmpty(data){

    if(typeof(data) == 'number' || typeof(data) == 'boolean'){
        return false;
    }
    if(typeof(data) == 'undefined' || data === null){
        return true;
    }
    else {
        return false;
    }
}