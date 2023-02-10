// https://rapidapi.com/apininjas/api/recipe-by-api-ninjas/ API for recipies
// https://rapidapi.com/OthmaneDch/api/unsplash-data API for pictures 


// Calling API via set variable to test it works. Using prewritten script provided by API creator.  LMB
//can confirm logs results to the console. LMB

var query = 'tomato,+pepper,+chicken,+chilli';
/* var query1 = 'onion';
var query2 = 'pepper';
var query3 = 'squid';
var query4= 'salt';
var query5 = 'goat'; */


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

//testing spoonacular
// can confirm returns results to console and accepts 3-4 ingredients before returning minimal responses LMB

var spoonUrl = 'https://api.spoonacular.com/food/products/search?query=' + query /* + query1 + query2 + query3 + query4 + query5  */+'&apiKey=6f5b740887744617a3980e15981b89e9'

$.ajax({
    url: spoonUrl,
    method: "GET",
}).then(function(response){

    console.log(response)

});

/*
$(document).ready(function () {
    // get user input when the get recipe button clicked
    $('#getRecipeBtn').click(function () {
        const recipe = $('#search-input').val();
        // get recipe
        getRecipe(recipe);
    });
});

//function for fetching recipe api
function getRecipe(recipe){

}
*/


$(".getRecipeBtn").on("click", function (event) {
  event.preventDefault();

  query = $("#search-input").val().trim();

  console.log(query);

  getRecipe();
});

function getRecipe() {
  var queryUrl =
    "https://api.spoonacular.com/recipes/complexSearch?query=" +
    query +
    "&apiKey=6f5b740887744617a3980e15981b89e9";

  $.ajax({
    url: queryUrl,
    method: "GET",
  }).then(function (response) {
    console.log(response);

    // display data to html

    for (let i = 0; i < response.results.length; i++) {
      console.log(response.results[i]);

      var cardDiv = $("<div>");
      var cardBody = $("<div>");
      var recipeImg = $("<img>");
      var cardTitle = $("<h3>");
      var cardId = $("#response.results[i].id");


      cardTitle.text(response.results[i].title);
      recipeImg.attr('src', response.results[i].image);

      console.log(response.results[i].title)
      console.log( response.results[i].image)

      cardBody.append(cardTitle);
      cardBody.append(recipeImg);
      cardDiv.append(cardBody);
      $('#cardContainer').append(cardDiv)
      
    }
  });
}

// get recipe information using id from get recipe
//var recipeUrl = 'https://api.spoonacular.com/recipes/' + recipeID + '/information&apiKey=6f5b740887744617a3980e15981b89e9'

/* comment */