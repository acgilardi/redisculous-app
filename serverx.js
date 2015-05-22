var http = require('http'),
    express = require('express'),
    path = require('path'),
    port = process.env.PORT || 8080,
    app = express();

//app.configure(function () {
    //app.set('port', process.env.PORT || 8080);
    //app.use(express.logger('dev'));  /* 'default', 'short', 'tiny', 'dev' */
    //app.use(express.bodyParser())

    app.use(express.static(path.join(__dirname, '/build')));
//});

//app.use(express.static(__dirname+'/folder_containing_assets_OR_scripts'));

app.get('/', function(req, res){
    res.sendfile(__dirname + '/index.html');
});

//app.get('/wines', function(req, res) {
//    res.send([{name:'wine1'}, {name:'wine2'}]);
//});

app.listen(app.get('port'), function() {
    console.log('Server listening on port' + port + '...');
});

//app.listen(port);
//console.log('Server listening on port' + port + '...');

//http.createServer(function (req, res) {
//    res.writeHead(200, {'Content-Type': 'text/html'});
//    res.end('<h1>Bazinga!</h1>\n');
//}).listen(port, function () {
//    console.log('Server listening on port' + port + '...');
//});
