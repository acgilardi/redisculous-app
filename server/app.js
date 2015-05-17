var http = require('http'),
  port = process.env.PORT || 8080;

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('<h1>Bazinga!</h1>\n');
}).listen(port, function() {
  console.log('Server listening on port' + port + '...');
});
