
$(function() {

    $('button').click(function() {

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
    });//click
});

function parseResults(data) {

    //var val = data instanceof jQuery;
    alert(JSON.stringify(data));

    /*var titles = '';
     for(var i = 0; i <data.results.length; i++)
     titles = titles + ' ' + data.results[i].original_title;

     alert(titles);*/
}