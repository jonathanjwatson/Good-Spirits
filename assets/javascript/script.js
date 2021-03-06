
$(document).ready(function () {

  var moodMusicArray = [];
  var moodBoozeArray = [];
  var moodEl;
  var musicEl;
  var boozeEl;

  var songz = {
    "thirsty|country": "Feels So Right",
    "thirsty|rock": "I Touch Myself",
    "thirsty|randb" : "Sexual Healing",
    "thirsty|edm" : "Future Proof",
    "thirsty|indie" : "I Wanna Be Yours",
    "thirsty|jazz": "I Can't Make You Love Me",
  
    "zen|country": "What I Never Knew I Always Wanted",
    "zen|rock": "Little Wing",
    "zen|randb" : "Never Personal",
    "zen|edm" : "Dear Boy",
    "zen|indie" : "Mad Sounds",
    "zen|jazz": "Zen Is When",
  
    "happy|country": "I like it, I love it",
    "happy|rock": "Happy",
    "happy|randb" : "You like it",
    "happy|edm" : "The One",
    "happy|indie" : "Best day of my life",
    "happy|jazz": "I Want To Be Happy",
  
    "sad|country": "Hurt",
    "sad|rock": "No Surprises",
    "sad|randb" : "Un-break my heart",
    "sad|edm" : "Sad Song",
    "sad|indie" : "9 Crimes",
    "sad|jazz": "Strange Fruit",
  
    "energized|country": "All My Rowdy Friends Are Coming Over Tonight",
    "energized|rock": "Don't Stop Me Now",
    "energized|randb" : "Don't Stop 'Til You Get Enough",
    "energized|edm": "Let's go",
    "energized|indie": "Panic Switch",
    "energized|jazz": "Wham Bam Thank You Ma'am",
  
    "calm|country": "What I Never Knew I Always Wanted",
    "calm|rock": "Have You Ever Seen the Rain",
    "calm|randb": "Take A Bow",
    "calm|edm": "Dear Boy",
    "calm|indie":"Stephanie Says",
    "calm|jazz": "So what",
  };

  // drink variables from Joel
  var drinks = {
    "happy|vodka": "Victory Collins",
    "happy|rum": "Day At The Beach", // happy rum
    "happy|gin": "Orange Oasis", //happy Gin
    "happy|whiskey": "Allegheny", //happy whiskey
    "happy|tequila": "Tequila Sunrise", // happy tequilla
    "happy|brandy": "Brandy Cobbler", //happy brandy
    "sad|vodka": "Bruised Heart", //sad vadka
    "sad|rum": "Adios Amigos Cocktail", //sad rum
    "sad|gin": "Corpse Reviver", //sad gin
    "sad|whiskey": "Bourbon Sour", //sad whiskey
    "sad|tequila": "3-Mile Long Island Iced Tea", //sad tequilla
    "sad|brandy": "Brandy Sour", //sad brandy
    "thirsty|vodka": "Popped Cherry", //thirsty vodka
    "thirsty|rum": "Bahama Mama", // thirsty rum
    "thirsty|gin": "69 Special", //thirsty gin
    "thirsty|whiskey": "Midnight Cowboy", //thirsty wisky
    "thirsty|tequila": "Paloma", //thirsty tequilla
    "thirsty|brandy": "Between The Sheets", //thirsty brandy
    "energized|vodka": "1-900-FUK-MEUP", //energized vodka
    "energized|rum": "Adam Bomb", //energized rum
    "energized|gin": "Salty Dog", //energized gin
    "energized|whiskey": "Fahrenheit 5000", //energized whiskey
    "energized|tequila": "Brave Bull Shooter", //nergized tequilla
    "energized|brandy": "English Highball", //energized brandy
    "calm|vodka": "Dirty Martini", //calm vodka
    "calm|rum": "Rum Punch", //calm rum
    "calm|gin": "Gin And Tonic", //calm gin
    "calm|whiskey": "Sazerac", //calm whiskey
    "calm|tequila": "Tequila Slammer", //calm tequilla
    "calm|brandy": "Boston Sidecar", //calm brandy
    "zen|vodka": "Absolut Stress #2", //zen vodka
    "zen|rum": "Zombie", //zen rum
    "zen|gin": "Jitterbug", //zen gin
    "zen|whiskey": "Artillery Punch", //zen whiskey
    "zen|tequila": "Downshift", //zen tequilla
    "zen|brandy": "Artillery Punch", //zen brandy
  };

  function getSongData() {
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
      var songImage = response.data[0].album.cover_medium;
      changeSong(response.data[0].preview);
      $("#results-song-image").append(
        `<img id="album-pic" src=${songImage} />`
      );
    });
  }
  function changeSong(mp3File) {
    console.log(mp3File);
    $("#music-player-source").attr("src", mp3File);


    var audio = $("#music-player");

    audio[0].pause();
    audio[0].load(); //suspends and restores all audio element
  }

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
      $("#drink-ingredients-title").append("Ingredients" + `<br>`)
      $("#drink-instructions").append(
        `<br>` + response.drinks[0].strInstructions
      );
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
function hardReset() {
  moodBoozeArray = [];
  moodMusicArray = [];
  $("#results-drink-div").children().each(function(index,child){
    console.log(child);
    $(child).html("");
  });
  console.log($("#results-music-display-div").children());
  $("#results-music-display-div").children().each(function(index,child){
    console.log(child);
    $(child).html("");
  });
  console.log(moodBoozeArray);
  console.log(moodMusicArray);
  //toLandingPage();
}

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
  hardReset();
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