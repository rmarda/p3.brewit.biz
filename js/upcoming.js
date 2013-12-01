
$(function() {

    var url = 'http://api.themoviedb.org/3/';
    var mode = 'movie/upcoming'
    var key = '?api_key=470fd2ec8853e25d2f8d86f685d2270e';
    $.ajax({
        url: url + mode + key,
        dataType: 'jsonp',
        success: function(data) {
            parseResults(data);
        }
    }); //ajax
});

function parseResults(data) {

    if(data.results.length == 0){
        $('#search_results .inner').html('We didn\'t find any movies that matched your query.');
        return;
    }

    var base_url = window.configData.images['base_url'];
    var image_size = window.configData.images['poster_sizes'][1];
    var url = base_url + image_size;
    // clear out the page
    $('#search_results .inner').empty();

    $('#search_results .inner ').css('list-style-type', 'none');
    $('#search_results .inner').append('<ul>');
    for(var i = 0; i<data.results.length; i++) {

        var image = data.results[i].poster_path;
        var image_path = '';
        if(image == null)
            continue;
        else
            image_path = url + data.results[i].poster_path;
        var movie_name = data.results[i].original_title;
        var release_date = data.results[i].release_date;
        var vote_average = data.results[i].vote_average;
        var vote_count = data.results[i].vote_count;

        $('#search_results .inner').append('<li><img src="' + image_path + '" /> </li>');
        $('#search_results .inner').append(movie_name);
        $('#search_results .inner').append('<br>');
        $('#search_results .inner').append('Release Date: '+release_date);
        $('#search_results .inner').append('<br>');
        $('#search_results .inner').append('Avg. Rating: '+ vote_average);
        $('#search_results .inner').append('<br>');
        $('#search_results .inner').append('Total no. of votes: '+vote_count);
    }
    $('#search_results .inner').append('</ul>');


}