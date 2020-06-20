
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
    // $("#drinks-here").append(response.drinks[0].strDrink);
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
// navigates from landing page to age verification page
function toAgeVerificationPage() {
  $("#landing-page").hide();
  $("#age-verification-page").show();
};
// redirects to landing page when user clicks "back" from any page
function toLandingPage() {
  $("#age-verification-page").hide();
  $("#mood-page").hide();
  $("#music-page").hide();
  $("#kids-page").hide();
  $("#booze-page").hide();
  $("#results-page").hide();
  $("#landing-page").show();
}
// if user is 21, this navigates forward to mood page
function toMoodPage() {
  $("#age-verification-page").hide();
  $("#mood-page").show();
}
// this navigates forward to music page
function toMusicPage() {
  $("#mood-page").hide();
  $("#music-page").show();
}
// if user is under 21, this navigates to a kids friendly page
function toKidsPage() {
  $("#age-verification-page").hide();
  $("#kids-page").show();
}

function toBoozePage() {
  $("#music-page").hide();
  $("#booze-page").show();
}

function toResultsPage() {
  $("#booze-page").hide();
  $("#results-page").show();
}