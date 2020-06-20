$(document).ready(function () {
  var queryInitial =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
var searchDrink = "Artillery punch";
var queryURL = queryInitial + searchDrink;
$.ajax({
  url: queryURL,
  method: "GET",
}).then(function (response) {
  console.log(response);
  // in this function I will pass in the name of drink and save all data needed to be displayed.
  $("#drink-name").append(response.drinks[0].strDrink);

  $("#drink-image").append(response.drinks[0].strDrinkThumb);
  

  for (var i = 1; i <= 15; i++) {
    var key = "strIngredient" + i;
    if (response.drinks[0][key] !== null) {
      console.log(response.drinks[0][key]);
     
    }
    $("#drink-ingredients").append(response.drinks[0][key]);
  }
  
  for (var i = 1; i <= 15; i++) {
    var measure = "strMeasure" + i;
    if (response.drinks[0][measure] !== null) {
       console.log(response.drinks[0][measure]);
    }
    $("#drink-ingredients").append(response.drinks[0][measure]);
  }

  $("#drink-instructions").append(response.drinks[0].strInstructions);
  
  
  
});

});

// onclick functions- DO NOT PUT THESE INSIDE DOCUMENT READY!
// navigate from landing page to age verification page
function toAgeVerificationPage() {
  $("#landing-page").hide();
  $("#age-verification-page").show();
};

function toLandingPage() {
  $("#landing-page").show();
  $("#age-verification-page").hide();
  $("#mood-page").hide();
  $("#music-page").hide();
}

function toMoodPage() {
  $("#mood-page").show();
  $("#age-verification-page").hide();
}

function toMusicPage() {
  $("#mood-page").hide();
  $("#music-page").show();
}