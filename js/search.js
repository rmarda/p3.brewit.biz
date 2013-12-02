$(function() {

    // bind search button click with callback
    $('#movie_search_btn').click(searchMovie);

    // bind enter key with textbox
    $('#movie_input').keyup(function(e){
        if(e.keyCode == 13)
        {
            $(this).trigger("enterKey");
        }
    });

    $('#movie_input').bind("enterKey",searchMovie);

});

function searchMovie() {
    var modeStr = 'search/movie';
    var input = $('#movie_input').val();
    var movieName = encodeURI(input);
    var queryStr = '&query='+ movieName;
    fetchDataFromExternal(modeStr, queryStr);
}