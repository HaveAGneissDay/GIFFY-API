
//When Opening the webpage I should be able to

//STEP 1: Make a button  ( X )
//STEP 2: Search for a topic ( X )
//STEP 3: Make the new topic into a button  ( X )
//STEP 4: Click on a button to run an ajax call for GIFs ( X )
//STEP 5: When clicked, the display should be empty   ( X )
//STEP 6: Load the GIFs of the new button clicked as static  ( X )
//STEP 7: When GIF is clicked it should move  ( X )




$(document).ready(function() {

//Global Variables
var topics =["dog", "cat", "corn", "Batman","deadpool", "Jennifer Lawrence", "Britney Spears"];


// After everything is loaded. I should be able to add a new button
// I need to erase the previous buttons and populate the new buttons so that they do not double up
function renderButtons() {
  //clear the buttons so I don't duplicate
 $("#topics-view").html("");

  // Loop through the the topics to generate new buttons
  for (var i = 0; i < topics.length; i++) {
    var newButton = $("<button>");
    newButton.addClass("topic");
    newButton.attr("data-name", topics[i]);
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


// When I click the button I want to run an ajax call  (  X  )
// Build Ajax Call function   (  X  )
// Return Gifs and ratings    (  X  )
// return some search results from ajax   (  X  )
// make those search results into gifs    (  X  )



$(document).on("click", ".topic", function () {

// Selects the topic that I want, becomes the variable that goes into the URL
var topic = $(this).attr("data-name");
//The URL that I need
var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=dc6zaTOxFJmzC";

console.log (queryURL);

$.ajax({
  url: queryURL,
  method: "GET"
}).done(function(response) {
  console.log(response.data)
  console.log(response.data[0].rating)
  console.log(response.data[0].images.fixed_height_small_still.url)

  //Empty the display
  $("#display").html("");

  if (response.data === "") {
    alert("there are no GIFs matching your criteria");
  }
// We only wan the first 10 GIFs in the search result
  for (var i = 0; i < 10; i++) {
    //Make a new div to hold the Gifs
    var divGIF = $("<div>");
    divGIF.addClass("divGIF");

    // Add the rating
    // make a p tag and add the text
    var ratingGIF = $("<p>").text("Rated : " + response.data[i].rating);
      divGIF.append(ratingGIF);
      // pulling gif
     var imageGIF = $("<img>");

     // still image stored into src of image
     imageGIF.attr("src", response.data[i].images.fixed_height_small_still.url);
     // still image
     imageGIF.attr("data-still",response.data[i].images.fixed_height_small_still.url);
     // animated image
     imageGIF.attr("data-animate",response.data[i].images.fixed_height_small.url);
      // set the image state
     imageGIF.attr("data-state", "still");

     imageGIF.addClass("image");
     //save changes
     divGIF.append(imageGIF);

      $("#display").prepend(divGIF);

  }

})

})



//The gifs loaded should be static until I click on them

$(document).on("click", ".image", function(){
    var state = $(this).attr('data-state');
    if ( state == "still"){
        $(this).attr("src", $(this).data("animate"));
        $(this).attr("data-state", "animate");
    }else{
        $(this).attr("src", $(this).data("still"));
        $(this).attr("data-state", "still");
    }
});







renderButtons();
})
