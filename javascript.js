
//When Opening the webpage I should be able to

//STEP 1: Make a button  ( X )
//STEP 2: Search for a topic ( X )
//STEP 3: Make the new topic into a button  ( X )
//STEP 4: Click on a button to run an ajax call for GIFs (  )
//STEP 5: When clicked, the display should be empty   (  )
//STEP 6: Load the GIFs of the new button clicked as static  (  )
//STEP 7: When GIF is clicked it should move  (  )




$(document).ready(function() {

//Global Variables
var topics =["dog", "cat", "batman"];


// After everything is loaded. I should be able to add a new button
// I need to erase the previous buttons and populate the new buttons so that they do not double up
function renderButtons() {
  //clear the buttons so I don't duplicate
 $("#topics-view").html("");

  // Loop through the the topics to generate new buttons
  for (var i = 0; i < topics.length; i++) {
    var newButton = $("<button>");
    newButton.text(topics[i]);
    $("#topics-view").append(newButton);
  }
}

//this function makes new buttons
$("#add-topics").on("click", function(event) {
  event.preventDefault();
  var newTopic = $("#topics-input").val()
  topics.push(newTopic);
  renderButtons();
})


// Run an ajax call
// var queryURL = "https://github.com/Giphy/GiphyAPI" + topic + "#public-beta-key";
//
// $.ajax({
//   url: queryURL,
//   method: "GET"
// }).done(function(response) {
//   console.log(response)
//   $("#display").html();
// })


// return some search results from ajax
// make those search results into gifs


//The gifs loaded should be static until I click on them









renderButtons();
})
