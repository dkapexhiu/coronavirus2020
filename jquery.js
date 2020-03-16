$(document).ready(function() {

    $('#app').append('<div class="container"></div>');

    const url = 'https://covid19-json-api.herokuapp.com/posts';

    $.get(url).done(function(data) {
        data.forEach(movie => {
        	console.log(movie)
            $('.container').append(
                '<div class="card">'
                + '<h1>Region: ' + movie.Country.Region + '</h1>'
                + '<p>State: ' + movie.Province.State + '</p>'
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


