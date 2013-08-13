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

//define behavior for an individual socket

io.sockets.on('connection', function(socket) {  //connection is a reserved handler

	socket.on("send message", function(data) {
		//console.log(data);
		io.sockets.emit('new message', data)
		// socket.broadcast.emit - sends message to everyone but me; unlike io.sockets.emit
	});

});


server.listen(3000);
