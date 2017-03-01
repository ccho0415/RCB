//Require the HTTP module - built into node
var http = require("http");
// Here we define a port to listen to
var PORT = 8080;
//Here we create a generic function to handle requests and responses
function handleRequest(request, response){
//End the response and Trigger when the uder visits the PORT URL
	response.end("It Works!! Path Hit:"+ request.url);
}
//We are going to create a server using the Node HTTP package
// Then pass it through the handleRequest function to empower it with functionality.
var server = http.createServer(handleRequest);
// Listen for client requests on this port
server.listen(PORT, function(){
// What to send to client once finished
console.log("Server listening on: http://localhost:%s", PORT);
});