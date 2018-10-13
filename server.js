var http = require('http');
var handleRequest = function(request, response) {
  response.writeHead(200);
  response.end("Hello World to deployed using Cloud Build");
}
var www = http.createServer(handleRequest);
www.listen(8080);
