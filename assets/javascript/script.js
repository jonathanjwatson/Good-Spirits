$(document).ready(function () {


});

// onclick functions- DO NOT PUT THESE INSIDE DOCUMENT READY!
// navigates from landing page to age verification page
function toAgeVerificationPage() {
  $("#landing-page").hide();
  $("#age-verification-page").show();
};
// redirects to landing page when user clicks "back" from any page
function toLandingPage() {
  $("#landing-page").show();
  $("#age-verification-page").hide();
  $("#mood-page").hide();
  $("#music-page").hide();
}
// if user is 21, this navigates forward to mood page
function toMoodPage() {
  $("#mood-page").show();
  $("#age-verification-page").hide();
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