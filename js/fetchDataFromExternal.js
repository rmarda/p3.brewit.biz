
function fetchDataFromExternal(mode, query) {

    var url = 'http://api.themoviedb.org/3/';
    var key = '?api_key=470fd2ec8853e25d2f8d86f685d2270e';

    if(testEmpty(window.configData)){
        setConfig(url, key);
    }

    if(testEmpty(query)){
        query = '';
    }

    $.ajax({
        url: url + mode + key + query,
        dataType: 'jsonp',
        success: function(data) {
            parseResults(data);
        }
    }); //ajax

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

    if(data.results.length == 0){
        $('section#feature_area').empty();
        $('section#feature_area').append("<article id='errorMsg'></article>");
        $('article#errorMsg').css('padding', '12px');
        $('article#errorMsg').html('We didn\'t find any results matching your query.');
        return;
    }

    var base_url = window.configData.images['base_url'];
    var image_size = window.configData.images['poster_sizes'][1];
    var url = base_url + image_size;
    // clear out the page
    $('section#feature_area').empty();

    //$('section#feature_area ').css('list-style-type', 'none');
    //$('section#feature_area').append('<ul>');
    for(var i = 0; i<data.results.length; i++) {

        var image = data.results[i].poster_path;
        var image_path = '';
        if(image == null){
            continue; /* TODO: add a place holder image instead of continuing */
        }
        else{
            image_path = url + data.results[i].poster_path;
        }
        var movie_name = data.results[i].original_title;
        var release_date = data.results[i].release_date;
        var vote_average = data.results[i].vote_average;
        var vote_count = data.results[i].vote_count;
        $('section#feature_area').append("<article class='movieItem'></article>");
        $('section#feature_area article.movieItem').css('padding', 10);
        $('section#feature_area article.movieItem').append('<img src="' + image_path + '" />');
        $('section#feature_area article.movieItem').append('<p>' + movie_name+ '</p>');
        $('section#feature_area article.movieItem').append('<p>Release Date: '+release_date+'</p>');
        $('section#feature_area article.movieItem').append('<p>Avg. Rating: '+ vote_average + '</p>');
        $('section#feature_area article.movieItem').append('<p>Total no. of votes: '+vote_count+'</p>');
    }
    //$('#search_results .inner').append('</ul>');


}

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
