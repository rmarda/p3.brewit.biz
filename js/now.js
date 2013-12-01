
$(function() {

    var url = 'http://api.themoviedb.org/3/';
    var mode = 'movie/now_playing'
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

    var base_url = window.configData.images['base_url'];
    var image_size = window.configData.images['poster_sizes'][1];
    var url = base_url + image_size;
    //$('#search_results .inner').html('Displaying results' + results);
    $('#search_results .inner ').css('list-style-type', 'none');
    $('#search_results .inner').append('<ul>');
    for(var i = 0; i<data.results.length; i++) {
        var movie_name = data.results[i].original_title;
        $('#search_results .inner').append('<li><img src="' + url + data.results[i].poster_path+ '" /> </li>');
        $('#search_results .inner').append(movie_name);
    }
    $('#search_results .inner').append('</ul>');

}