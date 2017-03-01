// Initialize Firebase (YOUR OWN APP)
  var config = {
    apiKey: "AIzaSyCBAcWIo-hTx9FzrEdNwTp5h9oVUkgntkk",
    authDomain: "fir-class-activity-7c6e8.firebaseapp.com",
    databaseURL: "https://fir-class-activity-7c6e8.firebaseio.com",
    storageBucket: "fir-class-activity-7c6e8.appspot.com",
    messagingSenderId: "434673336778"
  };

  firebase.initializeApp(config);
  var database = firebase.database();

// Create a variable to reference the database


// Use the below initialValue
var initialValue = 100;

// Use the below variable clickCounter to keep track of the clicks.
var clickCounter = initialValue;

// --------------------------------------------------------------

// At the initial load, get a snapshot of the current data. (I.E FIREBASE HERE)
// HINT: Use databaseVariable.ref().on("value", function(snapshot)) {}

database.ref().on("value", function(snapshot) {

// Then we console.log the value of snapshot
  console.log(snapshot.val());

// Inside our .on function...

  // Console.log the initial "snapshot" value (the object itself)
$("#click-value").html(snapshot.val().clickCount);

  // Change the initial value to reflect the initial value in Firebase
  // HINT: snapshot.val().__________
    clickCounter = snapshot.val().clickCount;

  // Change the value of our clickCounter to match the value in the database
  // ___________ = snapshot.val().______________________
  console.log(clickCounter)
  // Change the HTML using jQuery to reflect the updated clickCounter value
  $("#click-value").html(clickCounter);

// Then include Firebase error logging
// HINT: }, function(errorObject)
  }, function(errorObject){
    console.log("The read failed: " + errorObject.code);
  });

// --------------------------------------------------------------

// Whenever a user clicks the click button
$("#click-button").on("click", function() {

  // Reduce the clickCounter by 1
  clickCounter--;

  // Alert User and reset the counter
  if (clickCounter === 0) {

    alert("Phew! You made it! That sure was a lot of clicking.");

    clickCounter = initialValue;

  }

  // Save new value to Firebase
    database.ref().set({
      clickCount : clickCounter
    });

  // Log the value of clickCounter
  console.log(clickCounter);

});

// Whenever a user clicks the restart button
$("#restart-button").on("click", function() {

  // Set the clickCounter back to initialValue
  clickCounter = initialValue;

  // Save new value to Firebase
  database.ref().set({
    clickCount: clickCounter
  });

  // Log the value of clickCounter
  console.log(clickCounter);

  // Change the HTML Values
  $("#click-value").html(clickCounter);


});

