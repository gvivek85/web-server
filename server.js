var express = require('express');
var app = express();
var port = 4000;

var middleware = require('./middleware.js');

app.use(middleware.logger);

/*app.get('/', function(req, res){
	res.send('Hello Express !');
});*/

app.get('/about', middleware.requireAuthentication, function(req, res){
	res.send('This is about us!!!!');
});

app.use(express.static(__dirname+'/public'));

app.listen(port, function(){
	console.log('Express server started!!' + port);
});