
//look into switch cases to 
//just put in the basic api setup proving data transfer, commented out the append methods to limit issues for now.
$(document).ready(function () {
 // getDrinkData(drink);
 var songs = [];
var availLiquor = [];
var ingredientString = [];
var seconds = 0;
//var song = "Eminem";
var moodMusicArray = [];
var moodBoozeArray = [];
var moodEl;
var musicEl;
var boozeEl;
 // getSongData();
  // var queryInitial =
  //   "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
  // var searchDrink = "Mojito";
  // var queryURL = queryInitial + searchDrink;
  // $.ajax({
  //   url: queryURL,
  //   method: "GET",
  // }).then(function (response) {
  //   console.log(response);
  //   // in this function I will pass in the name of drink and save all data needed to be displayed.
  //   //$("#drinks-here").append(response.drinks[0].strDrink);
  //   // $("#instructions-here").append(response.drinks[0].strInstructions);
  //   drinkPics.push(response.drinks[0]["strDrinkThumb"]);
  //   for (var i = 1; i <= 15; i++) {
  //     var key = "strIngredient" + i;
  //     if (response.drinks[0][key] !== null) {
  //       ingredientString.push(response.drinks[0][key]);
  //       //ingredientString = ingredientString + " " + response.drinks[0][key];
  //       // availLiquor[i].ingredients.push(response.drinks[0][key]);
  //       // console.log(availLiquor[i].ingredients);
  //       //$("#ingredients-here").append(response.drinks[0][key]);
  //     }
  //     console.log(response.drinks[0][key]);
  //     console.log(ingredientString);
  //   }
  //   //$("#drinks-here").append(response.drinks[0].strDrink);
  // });

var happyRock = [
  "https://cdns-preview-8.dzcdn.net/stream/c-851362f70a24a4d6dd1f8d1da0ad6542-3.mp3",
];
var happyRnb = [
  "https://cdns-preview-6.dzcdn.net/stream/c-658eddcaaa10d7dfb8ab483551575771-5.mp3",
];
var happyJazz = [
  "https://cdns-preview-9.dzcdn.net/stream/c-94d80bb7941a46cd6fae9b997e75b079-2.mp3",
];
var happyIndie = [
  "https://cdns-preview-a.dzcdn.net/stream/c-a81ce585bd605f4eb11eb0e2dbba9fe2-6.mp3",
];
var happyEdm = [
  "https://cdns-preview-5.dzcdn.net/stream/c-589dadb7557557655f1586b52254818c-5.mp3",
];
var happyCountry = [
  "https://cdns-preview-8.dzcdn.net/stream/c-851362f70a24a4d6dd1f8d1da0ad6542-3.mp3",
];

var energizedRock = [
  "https://cdns-preview-9.dzcdn.net/stream/c-92c97463dffd58220ac1e9a9ccbe5c44-1.mp3",
];
var energizedRnb = [
  "https://cdns-preview-4.dzcdn.net/stream/c-461b18185c3421e5756a534cc61dec81-5.mp3",
];
var energizedJazz = [
  "https://cdns-preview-c.dzcdn.net/stream/c-ca8eb1bbbb833be764f1d25894d0cd03-2.mp3",
];
var energizedIndie = [
  "https://cdns-preview-6.dzcdn.net/stream/c-6f00e0d02a7821581d1df69fc10914d1-2.mp3",
];
var energizedEdm = [
  "https://cdns-preview-a.dzcdn.net/stream/c-a551ce4b2f0ccb948e92510c7b6fb000-5.mp3",
];
var energizedCountry = [
  "https://cdns-preview-9.dzcdn.net/stream/c-9f348a5c1a182aea9484555e23a6c498-2.mp3",
];

var sadRock = [
  "https://cdns-preview-3.dzcdn.net/stream/c-37c53469043b4191c3f98f14a45e2107-7.mp3",
];
var sadRnb = [
  "https://cdns-preview-a.dzcdn.net/stream/c-abfc8823d955c84602caef54d5737e8d-7.mp3",
];
var sadJazz = [
  "https://cdns-preview-9.dzcdn.net/stream/c-940693c0a30e575d6d0e6466e1c80763-9.mp3",
];
var sadIndie = [
  "https://cdns-preview-f.dzcdn.net/stream/c-ff8d3e9bafaf8292c2ec0838e7844bec-6.mp3",
];
var sadEdm = [
  "https://cdns-preview-4.dzcdn.net/stream/c-4411bb93125a133e3d9d23b6c34d831f-2.mp3",
];
var sadCountry = [
  "https://cdns-preview-4.dzcdn.net/stream/c-4411bb93125a133e3d9d23b6c34d831f-2.mp3",
];

var calmRock = [
  "https://cdns-preview-8.dzcdn.net/stream/c-8ff32d46bee6dd021f63b8b4e0d4b437-6.mp3",
];
var calmRnb = [
  "https://cdns-preview-9.dzcdn.net/stream/c-9571d1a0be0db0b03e001cbdaffdc458-7.mp3",
];
var calmJazz = [
  "https://cdns-preview-9.dzcdn.net/stream/c-940693c0a30e575d6d0e6466e1c80763-9.mp3",
];
var calmIndie = [
  "https://cdns-preview-6.dzcdn.net/stream/c-6f00e0d02a7821581d1df69fc10914d1-2.mp3",
];
var calmEdm = [
  "https://cdns-preview-4.dzcdn.net/stream/c-4888db64bbdd4098ef3abdf1c7ee424f-6.mp3",
];
var calmCountry = [
  "https://cdns-preview-9.dzcdn.net/stream/c-9d9e97971cbf7743b0ea5aad5908f543-5.mp3",
];

var zenRock = [
  "https://cdns-preview-8.dzcdn.net/stream/c-8ff32d46bee6dd021f63b8b4e0d4b437-6.mp3",
];
var zenRnb = [
  "https://cdns-preview-d.dzcdn.net/stream/c-d91eedec735885e1e07d096c1017fc2d-6.mp3",
];
var zenJazz = [
  "https://cdns-preview-9.dzcdn.net/stream/c-94d80bb7941a46cd6fae9b997e75b079-2.mp3",
];
var zenIndie = [
  "https://cdns-preview-f.dzcdn.net/stream/c-ff8d3e9bafaf8292c2ec0838e7844bec-6.mp3",
];
var zenEdm = [
  "https://cdns-preview-4.dzcdn.net/stream/c-4888db64bbdd4098ef3abdf1c7ee424f-6.mp3",
];
var zenCountry = [
  "https://cdns-preview-9.dzcdn.net/stream/c-9d9e97971cbf7743b0ea5aad5908f543-5.mp3",
];

var thirstyRock = [
  "https://cdns-preview-0.dzcdn.net/stream/c-087ef667466625cc3010ff8036798c77-15.mp3",
];
var thirstyRnd = [
  "https://cdns-preview-e.dzcdn.net/stream/c-ec646ba7d148fff0a503691dfaa3b577-5.mp3",
];
var thirstyJazz = [
  "https://cdns-preview-9.dzcdn.net/stream/c-940693c0a30e575d6d0e6466e1c80763-9.mp3",
];
var thirstyIndie = [
  "https://cdns-preview-1.dzcdn.net/stream/c-1222b91e6d1748ccfa3696cdc89ecb33-5.mp3",
];
var thirstyEdm = [
  "https://cdns-preview-d.dzcdn.net/stream/c-d85850de8975c7904d52c41037c1268b-6.mp3",
];
var thirstyCountry = [
  "https://cdns-preview-4.dzcdn.net/stream/c-4411bb93125a133e3d9d23b6c34d831f-2.mp3",
];

// drink variables from Joel


var drinks = {
  "happy|vodka": "Victory Collins",
}

  // "Victory Collins", // happy vodka
  // "Day At The Beach", // happy rum
  // "Orange Oasis", //happy Gin
  // "Alleghany", //happy whiskey
  // "Tequilla Sunrise", // happy tequilla
  // "Brandy Cobbler", //happy brandy
  // "Bruised Heart", //sad vadka
  // "Adios Amigos Cocktail", //sad rum
  // "Corpse Reviver", //sad gin
  // "Bourbon Sour", //sad whiskey
  // "3-Mile Long Island Iced Tea", //sad tequilla
  // "Brandy Sour", //sad brandy
  // "Popped Cherry", //thirsty vodka
  // "Bahama Mama", // thirsty rum
  // "69 Special", //thirsty gin
  // "Midnight Cowboy", //thirsty wisky
  // "Paloma", //thirsty tequilla
  // "Between The Sheets", //thirsty brandy
  // "1-900-FUK-MEUP", //energized vodka
  // "Adam Bomb", //energized rum
  // "Salty Dog", //energized gin
  // "Fahrenheit 5000", //energized whiskey
  // "Brave Bull Shooter", //nergized tequilla
  // "English Highball", //energized brandy
  // "Dirty Martini", //calm vodka
  // "Rum Punch", //calm rum
  // "Gin And Tonic", //calm gin
  // "Sazerac", //calm whiskey
  // "Tequilla Slammer", //calm tequilla
  // "Boston Sidecar", //calm brandy
  // "Absolut Stress #2", //zen vodka
  // "Zombie", //zen rum
  // "Jitter Bug", //zen gin
  // "Artillery Punch", //zen whiskey
  // "Downshift", //zen tequilla
  // "Artillery Punch", //zen brandy


//just put in the basic api setup proving data transfer, commented out the append methods to limit issues for now.
// $(document).ready(function () {
  
//  getSongData(song);
//  getDrinkData(drink);
  // var search = "eminem";
  // var settings = {
  //   async: true,
  //   crossDomain: true,
  //   url: "https://deezerdevs-deezer.p.rapidapi.com/search?q=" + search,
  //   method: "GET",
  //   headers: {
  //     "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
  //     "x-rapidapi-key": "c44498c14bmsh109c8caa20abc0ep12e719jsnc8f75e4181e0",
  //   },
  // };
  // //in this anonymous function I will pass in the name of the song and save all data to be displayed.
  // $.ajax(settings).done(function (response) {
  //   console.log(response);
  //   console.log(response.data[0].preview);
  //   //  $("#info-here").append(response.hosts.images);
  // });

  // var queryInitial =
  //   "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
  // var searchDrink = "Artillery punch";
  // var queryURL = queryInitial + searchDrink;
  // $.ajax({
  //   url: queryURL,
  //   method: "GET",
  // }).then(function (response) {
  //   console.log(response);
  //   // in this function I will pass in the name of drink and save all data needed to be displayed.
  //   $("#drink-name").append(response.drinks[0].strDrink);
  // var search = "eminem";
  // var settings = {
  //   async: true,
  //   crossDomain: true,
  //   url: "https://deezerdevs-deezer.p.rapidapi.com/search?q=" + search,
  //   method: "GET",
  //   headers: {
  //     "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
  //     "x-rapidapi-key": "c44498c14bmsh109c8caa20abc0ep12e719jsnc8f75e4181e0",
  //   },
  // };
  //in this anonymous function I will pass in the name of the song and save all data to be displayed.
  // $.ajax(settings).done(function (response) {
  //   console.log(response);
  //   console.log(response.data[0].preview);

  //   // appending the image of the drink to the dom
  //   var drinkImage = response.drinks[0].strDrinkThumb;
  //   $("#drink-image").append(`<img id="drink-id" src=${drinkImage} />`);

  //   for (var i = 1; i <= 15; i++) {
  //     var key = "strIngredient" + i;
  //     if (response.drinks[0][key] !== null) {
  //       console.log(response.drinks[0][key]);
  //     }
  //     $("#drink-ingredients").append(response.drinks[0][key]);
  //   }
  //   // $("#drinks-here").append(response.drinks[0].strDrink);
  //   for (var i = 1; i <= 15; i++) {
  //     var measure = "strMeasure" + i;
  //     if (response.drinks[0][measure] !== null) {
  //       console.log(response.drinks[0][measure]);
  //     }
  //     $("#drink-ingredients").append(response.drinks[0][measure]);
  //   }

  //   $("#drink-instructions").append(response.drinks[0].strInstructions);
  //   console.log(response.drinks[0].strInstructions);
  // });

// function getDrinkData(drinkName){
//   var queryInitial =
//     "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
//   var searchDrink = drinkName;
//   var queryURL = queryInitial + searchDrink;
//   $.ajax({
//     url: queryURL,
//     method: "GET",
//   }).then(function (response) {
//     console.log(response);
//     // in this function I will pass in the name of drink and save all data needed to be displayed.
//     $("#drink-name").append(response.drinks[0].strDrink);

//     // appending the image of the drink to the dom
//     var drinkImage = response.drinks[0].strDrinkThumb;
//     $("#drink-image").append(`<img id="drink-id" src=${drinkImage} />`);

//     for (var i = 1; i <= 15; i++) {
//       var key = "strIngredient" + i;
//       if (response.drinks[0][key] !== null) {
//         console.log(response.drinks[0][key]);
//       }
//       $("#drink-ingredients").append(response.drinks[0][key]);
//     }
//     // $("#drinks-here").append(response.drinks[0].strDrink);
//     for (var i = 1; i <= 15; i++) {
//       var measure = "strMeasure" + i;
//       if (response.drinks[0][measure] !== null) {
//         console.log(response.drinks[0][measure]);
//       }
//       $("#drink-ingredients").append(response.drinks[0][measure]);
//     }

//     $("#drink-instructions").append(response.drinks[0].strInstructions);
//     console.log(response.drinks[0].strInstructions);
//   });
//}

var songz = {
  "thirsty|country": "My Little Girl",
  "thirsty|rock": "It must have been love",
  "thirsty|rnb" : "You like it",
  "thirsty|edm" : "The One",
  "thirsty|indie" : "No Control",
  "thirsty|jazz": "Black Bird (remastered 2009)",

  "zen|country": "What I Never Knew I Always Wanted",
  "zen|rock": "Little Wing",
  "zen|rnb" : "Never Personal",
  "zen|edm" : "Dear Boy",
  "zen|indie" : "Mad Sounds",
  "zen|jazz": "Always Leaving Always Gone",

  "happy|country": "My Little Girl",
  "happy|rock": "God's Country",
  "happy|rnb" : "You like it",
  "happy|edm" : "The One",
  "happy|indie" : "",
  "happy|jazz": "Always Leaving Always gone",

  "sad|country": "God's Country",
  "sad|rock": "Black Bird (remastered 2009)",
  "sad|rnb" : "Do Re Mi",
  "sad|edm" : "My Little Girl",
  "sad|indie" : "Mad Sounds",
  "sad|jazz": "Black Bird (remastered 2009)",

  "energized|country": "I Heard The Bells On Christmas Day",
  "energized|rock": "Nadine",
  "energized|rnb" : "We Own It (fast & furious)",
  "energized|edm": "Detroit 3AM (Radio Edit)",
  "energized|indie": "Wicked Campaign",
  "energized|jazz": "When It's Sleepy Time Down South (Live)",

  "calm|country": "What I Never Knew I Always Wanted",
  "calm|rock": "Lttle Wing",
  "calm|rnb": "Take A Bow",
  "calm|edm": "Dear Boy",
  "calm|indie":"Wicked Campaign",
  "calm|jazz": "Black Bird (remastered 2009)",
  

}

function getSongData(){
  var moodSongString = moodMusicArray.join("|");
  var searchSong = songz[moodSongString];
  console.log(searchSong);
  var search = searchSong;
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
    var title = "title";

    $("#results-song-title").append(response.data[0][title]);
    var songImage = response.data[0].album.cover_small;
    changeSong(response.data[0].preview);
    //$("#song-image").append(`<img id="album-pic" src=${songImage} />`);
    //  $("#info-here").append(response.hosts.images);
    //---
    //thinking here we call change song method that takes in the mp3 file as the parameter and changes song using following code
    
  });
  
}
function changeSong(mp3File){
  console.log(mp3File);
  $("#music-player-source").attr("src",mp3File);

var audio = $("#music-player");      

audio[0].pause();
audio[0].load();//suspends and restores all audio element

// if (isAutoplay) 
//     audio[0].play();
 }

  // ELIZABETH'S CODE -----------------------------------
 

  var queryInitial =
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

  // in this function I will pass in the name of drink and save all data needed to be displayed.
  function generateDrinkDisplay() {
    var moodBoozeStr = moodBoozeArray.join("|");
    var searchDrink = drinks[moodBoozeStr];
    console.log(moodBoozeStr);


    $.ajax({
      url: queryInitial + searchDrink,
      method: "GET",
    }).then(function (response) {
      console.log(response);
      // appending the name of the drink to the dom
      $("#drink-name").append(response.drinks[0].strDrink);
      // appending the image of the drink to the dom
      var drinkImage = response.drinks[0].strDrinkThumb;
      $("#drink-image").append(`<img id="drink-id" src=${drinkImage} />`);

      for (var i = 1; i <= 15; i++) {
        var key = "strIngredient" + i;
        var measure = "strMeasure" + i;

        if (response.drinks[0][key] == null) {
          continue;
        }
        $("#drink-ingredients").append(response.drinks[0][key] + ", ");
        $("#drink-ingredients").append(response.drinks[0][measure] + `<br>`);
      }
      $("#drink-instructions").append(`<br>` + response.drinks[0].strInstructions);
    });
  }

  // ELIZABETH'S CODE -----------------------------------

  // event listener to get selected mood
  $(".imagesMood").click(function () {
    var mood = $(this)[0].offsetParent.id;
    moodEl = mood;
    console.log(moodEl);
    toMusicPage();
  });

  // event listener to get selected music genre
  $(".imagesMusic").click(function () {
    var music = $(this)[0].offsetParent.id;
    musicEl = music;
    console.log(musicEl);
    chooseUserSong();
    getSongData();
    toBoozePage();
  });

  // event listener to get selected alcohol choice
  $(".imagesBooze").click(function () {
    var booze = $(this)[0].offsetParent.id;
    boozeEl = booze;
    console.log(boozeEl);
    chooseUserDrink();
    generateDrinkDisplay();
    toResultsPage();
  });

  // this function is called after the user selects music
  // this function returns an array to determine the song
  function chooseUserSong() {
    moodMusicArray = [];
    moodMusicArray.push(moodEl, musicEl);
    console.log(moodMusicArray);
  }

  // this function is called after the user selects alcohol
  // this function returns an array to determine the drink
  function chooseUserDrink() {
    moodBoozeArray = [];
    moodBoozeArray.push(moodEl, boozeEl);
    console.log(moodBoozeArray);
  }
}); // end of document.ready

//-------------------------------------------------
// onclick functions- DO NOT PUT THESE INSIDE DOCUMENT READY!

// navigate from landing page to age verification page
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
  $("#music-page").hide();
  $("#mood-page").show();
}

// this navigates forward to music page
function toMusicPage() {
  $("#mood-page").hide();
  $("#booze-page").hide();
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
