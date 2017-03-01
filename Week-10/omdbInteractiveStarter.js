
  // * Using the code sent to you earlier as a reference and using the code provided to you as a starter, create a Node application which takes in a movie name as a command line argument then uses the OMDB API to retrieve and return the release date to the console.

  //   * For this activity you have two options:

  //       * Easier: Require that the user provide a movie with a single word in the title (ex: Cinderella) 

  //       * Harder: Allow the user to provide a movie with as many words as possible (ex: Forrest Gump).

  //   * Hint: Start by figuring out what your API URL should be then use the starter code as a guide.

  //   * Hint: Remember to `npm install request` or else your code will not work no matter what
// INSTRUCTIONS:
// ---------------------------------------------------------------------------------------------------------
// Level 1:
// Take any movie with a word title (ex: Cinderella) as a Node argument and retrieve the year it was created

// Level 2 (More Challenging):
// Take a move with multiple words (ex: Forrest Gump) as a Node argument and retrieve the year it was created.
// ---------------------------------------------------------------------------------------------------------

// Include the request npm package (Don't forget to run "npm install request" in this folder first!)
// ...
var req = require('request');

req('http://www.omdbapi.com/', function (er, res, body) {
    console.log(JSON.parse(body).Title) 
})


// Grab or assemble the movie name and store it in a variable called "movieName"
var movieName = "";
// ...


// Then run a request to the OMDB API with the movie specified
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&r=json";


// This line is just to help us debug against the actual URL.
console.log(queryUrl);


// Then create a request to the queryUrl
// ...

  // If the request is successful
  // ...

  // Then log the Release Year for the movie
  // ...
