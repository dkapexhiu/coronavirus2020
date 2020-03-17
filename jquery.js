$(document).ready(function() {

    $('#app').append('<div class="container"></div>');

    const url = 'https://covid19-json-api.herokuapp.com/data';

    $.get(url).done(function(data) {
        data.forEach(movie => {
        	console.log(movie)
            $('.container').append(
                '<div class="card">'
                + '<h1>Country: ' + movie.Country_Region + '</h1>'
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

   $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#app .card").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });

});


