// Now it's students' turn to build a web server (or rather two). Slack out the following:

// Instructions

// Using the previous example as a guide, create an app that has two web servers.
// One that listens on port 7000 and one that listens on port 7500.
// The one listening on port 7000 will always tell the user something good about themselves.
// The one listening on 7500 will always tell the user something bad about themselves.
// Make sure you create a Github repo and commit this code!
// Bonus

// Look for other ways to expand what your server can do. As possibilities:
// Generate the good / bad phrase randomly from a list of predefined phrases
// Use the twitter package inside the response to also return a random tweet


//Require the HTTP module - built into node
var http = require("http");
// Here we define a port to listen to
var minionPORT = 7000;
var championPORT = 7500;
//Here we create a generic function to handle requests and responses
function minionhandleRequest(request, response){
//End the response and Trigger when the uder visits the PORT URL
	response.end("<img src='http://bitspers.com/wp-content/uploads/2014/06/League-of-Legends-Red-Super-Minion.png'>");
}
function championhandleRequest(request, response){
//End the response and Trigger when the uder visits the PORT URL
	response.end("<img src='http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg'>");
}
//We are going to create a server using the Node HTTP package
// Then pass it through the handleRequest function to empower it with functionality.
var minionserver = http.createServer(minionhandleRequest);
var championserver = http.createServer(championhandleRequest);
// Listen for client requests on this port
minionserver.listen(minionPORT, function(){
// What to send to client once finished
console.log("boop");
});
championserver.listen(championPORT, function(){
console.log("beep");
})
