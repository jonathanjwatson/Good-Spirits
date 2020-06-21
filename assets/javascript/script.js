var songs = [];
var availLiquor = [];
var ingredientString = [];

var happyRock = ["https://deezerdevs-deezer.p.rapidapi.com/search?q=elvis+presley"];
var happyRnb = ["https://cdns-preview-6.dzcdn.net/stream/c-658eddcaaa10d7dfb8ab483551575771-5.mp3"];
var happyJazz = ["https://cdns-preview-9.dzcdn.net/stream/c-94d80bb7941a46cd6fae9b997e75b079-2.mp3"];
var happyIndie = ["https://cdns-preview-a.dzcdn.net/stream/c-a81ce585bd605f4eb11eb0e2dbba9fe2-6.mp3"];
var happyEdm = ["https://cdns-preview-5.dzcdn.net/stream/c-589dadb7557557655f1586b52254818c-5.mp3"];
var happyCountry = ["https://cdns-preview-8.dzcdn.net/stream/c-851362f70a24a4d6dd1f8d1da0ad6542-3.mp3"];

var energizedRock = ["https://cdns-preview-9.dzcdn.net/stream/c-92c97463dffd58220ac1e9a9ccbe5c44-1.mp3"];
var energizedRnb = ["https://cdns-preview-4.dzcdn.net/stream/c-461b18185c3421e5756a534cc61dec81-5.mp3"];
var energizedJazz = ["https://cdns-preview-c.dzcdn.net/stream/c-ca8eb1bbbb833be764f1d25894d0cd03-2.mp3"];
var energizedIndie = ["https://cdns-preview-6.dzcdn.net/stream/c-6f00e0d02a7821581d1df69fc10914d1-2.mp3"];
var energizedEdm = ["https://cdns-preview-a.dzcdn.net/stream/c-a551ce4b2f0ccb948e92510c7b6fb000-5.mp3"];
var energizedCountry = ["https://cdns-preview-9.dzcdn.net/stream/c-9f348a5c1a182aea9484555e23a6c498-2.mp3"];

var sadRock = ["https://cdns-preview-3.dzcdn.net/stream/c-37c53469043b4191c3f98f14a45e2107-7.mp3"];
var sadRnb = ["https://cdns-preview-a.dzcdn.net/stream/c-abfc8823d955c84602caef54d5737e8d-7.mp3"];
var sadJazz = ["https://cdns-preview-9.dzcdn.net/stream/c-940693c0a30e575d6d0e6466e1c80763-9.mp3"];
var sadIndie = ["https://cdns-preview-f.dzcdn.net/stream/c-ff8d3e9bafaf8292c2ec0838e7844bec-6.mp3"];
var sadEdm = ["https://cdns-preview-4.dzcdn.net/stream/c-4411bb93125a133e3d9d23b6c34d831f-2.mp3"];
var sadCountry = ["https://cdns-preview-4.dzcdn.net/stream/c-4411bb93125a133e3d9d23b6c34d831f-2.mp3"];

var calmRock = ["https://cdns-preview-8.dzcdn.net/stream/c-8ff32d46bee6dd021f63b8b4e0d4b437-6.mp3"];
var calmRnb = ["https://cdns-preview-9.dzcdn.net/stream/c-9571d1a0be0db0b03e001cbdaffdc458-7.mp3"];
var calmJazz = ["https://cdns-preview-9.dzcdn.net/stream/c-940693c0a30e575d6d0e6466e1c80763-9.mp3"];
var calmIndie = ["https://cdns-preview-6.dzcdn.net/stream/c-6f00e0d02a7821581d1df69fc10914d1-2.mp3"];
var calmEdm = ["https://cdns-preview-4.dzcdn.net/stream/c-4888db64bbdd4098ef3abdf1c7ee424f-6.mp3"];
var calmCountry = ["https://cdns-preview-9.dzcdn.net/stream/c-9d9e97971cbf7743b0ea5aad5908f543-5.mp3"];

var zenRock = ["https://cdns-preview-8.dzcdn.net/stream/c-8ff32d46bee6dd021f63b8b4e0d4b437-6.mp3"];
var zenRnb = ["https://cdns-preview-d.dzcdn.net/stream/c-d91eedec735885e1e07d096c1017fc2d-6.mp3"];
var zenJazz = ["https://cdns-preview-9.dzcdn.net/stream/c-94d80bb7941a46cd6fae9b997e75b079-2.mp3"];
var zenIndie = ["https://cdns-preview-f.dzcdn.net/stream/c-ff8d3e9bafaf8292c2ec0838e7844bec-6.mp3"]
var zenEdm = ["https://cdns-preview-4.dzcdn.net/stream/c-4888db64bbdd4098ef3abdf1c7ee424f-6.mp3"];
var zenCountry = ["https://cdns-preview-9.dzcdn.net/stream/c-9d9e97971cbf7743b0ea5aad5908f543-5.mp3"];

var thirstyRock = ["https://cdns-preview-0.dzcdn.net/stream/c-087ef667466625cc3010ff8036798c77-15.mp3"];
var thirstyRnd = ["https://cdns-preview-e.dzcdn.net/stream/c-ec646ba7d148fff0a503691dfaa3b577-5.mp3"];
var thistyJazz = ["https://cdns-preview-9.dzcdn.net/stream/c-940693c0a30e575d6d0e6466e1c80763-9.mp3"];
var thistyIndie = ["https://cdns-preview-1.dzcdn.net/stream/c-1222b91e6d1748ccfa3696cdc89ecb33-5.mp3"];
var thirstyEdm = ["https://cdns-preview-d.dzcdn.net/stream/c-d85850de8975c7904d52c41037c1268b-6.mp3"];
var thistyCountry = ["https://cdns-preview-4.dzcdn.net/stream/c-4411bb93125a133e3d9d23b6c34d831f-2.mp3"];

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
    // in this function I will pass in the name of drink and save all data needed to be displayed.
    //$("#drinks-here").append(response.drinks[0].strDrink);
    // $("#instructions-here").append(response.drinks[0].strInstructions);

    for (var i = 1; i <= 15; i++) {
      var key = "strIngredient" + i;
      if (response.drinks[0][key] !== null) {
        ingredientString.push(response.drinks[0][key]);
      //ingredientString = ingredientString + " " + response.drinks[0][key];
        // availLiquor[i].ingredients.push(response.drinks[0][key]);
        // console.log(availLiquor[i].ingredients);
        //$("#ingredients-here").append(response.drinks[0][key]);
      }
      console.log(response.drinks[0][key]);
      console.log(ingredientString);
    }
    //$("#drinks-here").append(response.drinks[0].strDrink);
  });

  
  var search = "eminem";
  var settings = {
    async: true,
    crossDomain: true,
    url: "https://deezerdevs-deezer.p.rapidapi.com/search?q=" + search,
    method: "GET",
    headers: {
      "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
      "x-rapidapi-key": "c44498c14bmsh109c8caa20abc0ep12e719jsnc8f75e4181e0",
    },
  };
//in this anonymous function I will pass in the name of the song and save all data to be displayed.
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
}

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