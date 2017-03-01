//The url library allows us to parse parts of the request url
var url = require("url");
var http = require("http");
var PORT = 8080;
var server = http.createServer(handleRequest);

server.listen(PORT, function(){
console.log("Server listening on: http://localhost:%s", PORT);
});
function handleRequest(req,res){
 var urlParts = url.parse(req.url);
  switch (urlParts.pathname){
  	case "/":
  		displayRoot(urlParts.pathname, req, res);
  		break;
  	case "/portfolio":
  		displayPortfolio(url.Parts.pathname, req, res);
  		break;
  	case "/edit":
  		console.log("display edit");
  		break;
  	default:
  		display404(urlParts.pathname, req, res);
  }
}

function displayRoot(url, req, res){
	var myHTML = "<html>";
	myHTML += "<body>"
	res.writeHead(200, {"Content-Type": "text/html"});
	res.end(myHTML);
}
function displayPortfolio(url, req, res){
	var myHTML = "<html>";
	myHTML += "<body>"
	res.writeHead(200, {"Content-Type": "text/html"});
	res.end(myHTML);
}
function display404(url,req, res){
	res.writeHead(404,{
		"Content-Type": "text/html"
	});
	res.write("<h1> 404 HTML Not Found</h1>");
	res.end("The page you were looking for" + url+ "is not here");
}