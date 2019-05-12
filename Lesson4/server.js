var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var messages = [];
var coordinates = [];

app.use(express.static("."));
app.get('/', function (req, res) {
   res.redirect('index.html');
});
server.listen(3000);

io.on('connection', function (socket) {
    for(var i in messages) {
      io.sockets.emit("display message", coordinates[i]);
    }
    socket.on("send cordinates", function (data) {
        coordinates.push(data);
        io.sockets.emit("display message", data);
    });
 });
 