// Initialize Firebase

  var config = {
    apiKey: "AIzaSyCBAcWIo-hTx9FzrEdNwTp5h9oVUkgntkk",
    authDomain: "fir-class-activity-7c6e8.firebaseapp.com",
    databaseURL: "https://fir-class-activity-7c6e8.firebaseio.com",
    storageBucket: "fir-class-activity-7c6e8.appspot.com",
    messagingSenderId: "434673336778"
  };


    // Initialize Firebase

  
  firebase.initializeApp(config);
    // Create a variable to reference the database
  var database = firebase.database();


// Initial Values
var initialBid = 0;
var initialBidder = "No one :-(";
var highPrice = initialBid;
var highBidder = initialBidder;

// --------------------------------------------------------------

// At the initial load, get a snapshot of the current data.
database.ref().on("value", function(snapshot) {

  // If Firebase has a highPrice and highBidder stored (first case)
  if (snapshot.child("highBidder").exists() && snapshot.child("highPrice").exists()) {


    // Set the initial variables for highBidder equal to the stored values.
    highBidder = snapshot.val().highBidder;
    highPrice = parseInt(snapshot.val().highPrice);


    // Change the HTML to reflect the initial value
    $("#highest-bidder").html(snapshot.val().highBidder);
    $("#highest-price").html("$" + snapshot.val().highPrice);

    // Print the initial data to the console.
    console.log(snapshot.val().highBidder);

  }

  // Keep the initial variables for highBidder equal to the initial values
  else {

    // Change the HTML to reflect the initial value

    $("#highest-bidder").html(highBidder);
    $("#highest-price").html("$" + highPrice);
    // Print the initial data to the console.
    console.log(initialBidder);
    console.log(initialBid);


  }


// If any errors are experienced, log them to console.
}, function(errorObject) {
  console.log("The read failed: " + errorObject.code);
});

// --------------------------------------------------------------

// Whenever a user clicks the submit-bid button
$("#submit-bid").on("click", function() {

  // Get the input values
  var bidderName= $("#bidder-name").val().trim();
  var bidderPrice= $("#bidder-price").val().trim();
  console.log("#bidder-price");

  // Log the Bidder and Price (Even if not the highest)
  if (bidderPrice > highPrice) {

    // Alert
    alert("You are now the highest bidder.");


    // Save the new price in Firebase
    database.ref().set({

    highBidder: bidderName,
    highPrice: bidderPrice

});

    // Log the new High Price
    console.log(highPrice);


    // Store the new high price and bidder name as a local variable (could have also used the Firebase variable)
    var highestBidder = highBidder;
    var highestPrice = parseInt(highPrice);

    // Change the HTML to reflect the new high price and bidder
    $("#highest-bidder").html(bidderName);
    $("#highest-price").html(bidderPrice);
  }

  else {
    // Alert
    alert("Sorry that bid is too low. Try again.");
  }

  // Return "false" to allow "enter"
  return false;

});
