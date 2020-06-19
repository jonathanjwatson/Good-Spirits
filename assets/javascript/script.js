$(document).ready(function () {


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