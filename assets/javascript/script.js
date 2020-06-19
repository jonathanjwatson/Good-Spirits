
//just put in the basic api setup proving data transfer, commented out the append methods to limit issues for now.
$(document).ready(function () {
  var queryInitial =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
var searchDrink = "Mojito";
var queryURL = queryInitial + searchDrink;
$.ajax({
  url: queryURL,
  method: "GET",
}).then(function (response) {
  console.log(response);
  //$("#drinks-here").append(response.drinks[0].strDrink);
 // $("#instructions-here").append(response.drinks[0].strInstructions);

  for (var i = 1; i <= 15; i++) {
    var key = "strIngredient" + i;
    if(response.drinks[0][key] !== null){
        //$("#ingredients-here").append(response.drinks[0][key]);
    }
    console.log(response.drinks[0][key]);
    
  }
  //$("#drinks-here").append(response.drinks[0].strDrink);
});
var search = "eminem";
var settings = {
"async": true,
"crossDomain": true,
"url": "https://deezerdevs-deezer.p.rapidapi.com/search?q="+search,
"method": "GET",
"headers": {
"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
"x-rapidapi-key": "c44498c14bmsh109c8caa20abc0ep12e719jsnc8f75e4181e0"
}
}

$.ajax(settings).done(function (response) {
console.log(response);
console.log(response.data[0].preview);

//  $("#info-here").append(response.hosts.images);

});

});

// onclick functions- DO NOT PUT THESE INSIDE DOCUMENT READY!
// navigate from landing page to age verification page

//-------------------------------------------------
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