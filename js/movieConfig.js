$( document ).ready(function() {

    var url = 'http://api.themoviedb.org/3/';
    var mode = 'configuration';
    var key = '?api_key=470fd2ec8853e25d2f8d86f685d2270e';

    $.ajax({
        url: url + mode + key,
        dataType: 'jsonp',
        success: function(data) {
            configData(data);
        }
    }); //ajax
});


function configData(data) {

    window.configData = data;
    //var base_url = data.images['base_url'];

}