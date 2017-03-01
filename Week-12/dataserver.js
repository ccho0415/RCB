var http = require("http");
var fs = require("fs");
var PORT= 8080;
var server = http.createServer(handleRequest);
function handleRequest(req, res){
	fs.readFile("index.html", function(err,data){
		res.writeHead(200,{"Content-Type": "text/html"});
		res.end(data);
	});
}
