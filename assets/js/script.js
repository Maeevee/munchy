// https://rapidapi.com/apininjas/api/recipe-by-api-ninjas/ API for recipies
// https://rapidapi.com/OthmaneDch/api/unsplash-data API for pictures 


// Calling API via set variable to test it works. Using prewritten script provided by API creator.  LMB
//can confirm logs results to the console. LMB

var query = 'soup';
var queryURL ='https://api.api-ninjas.com/v1/recipe?query=' + query;

 $.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/recipe?query=' + query,
    headers: { 'X-Api-Key': 'bZu0ZOwBF15SEqwaXPoUXw==n56gNADIHBpQ7qQ8'},
    contentType: 'application/json',
    success: function(result) {
        console.log(result);
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
}); 

// Testing Image API  via set variable to test it works.
// can confirm logs results to console. LMB

var imageUrl = 'https://api.unsplash.com/search/photos?query=' + query + '&client_id=F91nJPADfVSVs_j2oN1I1jehSaooQhBgWfHLIZC3s68'

$.ajax({
    url: imageUrl,
    method: "GET",
}).then(function(response){

    console.log(response)

});

function getRecipe(recipe){

}

    // get 5-days forecast
    // getForecast(city).then(function (forecasts) {
    //     console.log(forecasts);
    //     let html = "";
    //     html += "<p class='forecast-header'>5-Day Forecast:</p>";
    //     html += "<div class='row'>"
    //     forecasts.list.forEach((forecast) => {
    //         if (forecast.dt_txt.split(" ")[1] == "00:00:00") {
    //             html += "<div class='col-2 border border-dark forecast-container'>";
    //             html += "<p class='forecast-date'>" + moment(forecast.dt * 1000).format("DD/MM/YYYY") + "</p>";
    //             html += "<p> Temp: " + forecast.main.temp + "°C </p>";
    //             html += "<p> Wind: " + forecast.wind.speed + " KPH </p>";
    //             html += "<p> Humidity: " + forecast.main.humidity + "% </p>";
    //             html += "</div>";
    //         }
    //     });
    //     html += "</div>"
    //     $('#forecast').html(html);
    // });

$(document).ready(function () {
    $('#getRecipeBtn').click(function () {
        const recipe = $('#search-input').val();
        // get recipt
        fetchData(recipe);
    });
});