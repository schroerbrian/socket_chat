//required boiler plate for express module
var express = require("express");
var app = express();

//add socket.io to the project
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

//define our "routes"
app.get('/', function(req, res) {
	res.sendfile(__dirname + '/index.html');
});

server.listen(3000);
