
$(function() {

    $('button').click(function() {

        var url = 'http://api.themoviedb.org/3/';
        var mode = 'search/movie';
        var key = '?api_key=470fd2ec8853e25d2f8d86f685d2270e';
        var input = $('#movie_input').val();
        var movieName = encodeURI(input);

        $.ajax({
            url: url + mode + key + '&query='+movieName,
            dataType: 'jsonp',
            success: function(data) {
                parseResults(data);
            }
        }); //ajax
    });//click
});

function parseResults(data) {

    var results = JSON.stringify(data);
    $('#search_results .inner').html('Displaying results' + results);

    /*var titles = '';
    for(var i = 0; i <data.results.length; i++)
        titles = titles + ' ' + data.results[i].original_title;

    alert(titles);*/

    //var myobj = {name:"Ruchika", age: 32};
    //var abc = $.parseJSON(myobj);
    //alert(JSON.stringify(myobj));

}