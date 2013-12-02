$(function() {

    $('button').click(function() {
        var modeStr = 'search/movie';
        var input = $('#movie_input').val();
        var movieName = encodeURI(input);
        var queryStr = '&query='+ movieName;
        fetchDataFromExternal(modeStr, queryStr);
    });


});