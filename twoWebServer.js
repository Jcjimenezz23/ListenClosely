
var http = require("http");

var PORTnice = 7000;

var PORTmean = 7500;

function handleGoodRequest(request, response) {
	response.end("I like your smile, its very attractive." + request.url);

}

var server = http.createServer(handleGoodRequest);

server.listen(PORTnice, function() {
	console.log("Server listening on: http://localhost:%s", PORTnice);
});


function handleBadRequest(request, response) {
	response.end("Your breath stinks." + request.url);
}

var server2 = http.createServer(handleBadRequest);

server2.listen(PORTmean, function() {
	console.log("Server listening on: http://localhost:%s", PORTmean);
});
