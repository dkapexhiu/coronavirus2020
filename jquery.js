$(document).ready(function() {

    $('#app').append('<div class="container"></div>');

    const url = 'https://covid19-json-api.herokuapp.com/data';

    $.get(url).done(function(data) {
        data.forEach(movie => {
        	console.log(movie)
            $('.container').append(
                '<div class="card">'
                + '<h1>Country: ' + movie.Country_Region + '</h1>'
                + '<p>Active: ' + movie.Active + '</p>'
                + '<p>Confirmed: ' + movie.Confirmed + '</p>'
                + '<p>Deaths: ' + movie.Deaths + '</p>'
                + '<p>Recovered: ' + movie.Recovered + '</p>'
                + '</div>'
            );
        });
    })
    .fail(function(error) {
        $('.container').append(
            '<div class="card">'
            +'<h1>Oh, no! Something went wrong!</h1>'
            +'<p>' + error.status + ': ' 
            + ' ' + error.statusText + '</p>'
            +'</div>'
        );
    });

});


