//-- Jasmine Server: A Simple Server & Client for running automated Jasmine Tests!

/* Requires */
var express = require('express'),
    io = require('socket.io'),
    http = require('http'),
    app = express.createServer(),
    socket = io.listen(app),
    sys = require('sys');

/*
 * Express Base =============================================================
 *
 * Used to handle requests and serve our public files
 */
app.use(express.staticProvider(__dirname + '/public'));

/*
 * Socket.IO ================================================================
 *
 * Configures how Socket IO should behave! 
 */
socket.on('connection', function(client) {

  client.send('run');

  client.on('message', function(message) {
    sys.puts(message);
  });


});


/*
 * Listeners ================================================================
 *
 * Attach all our goodies to an actual port =)
 */
app.listen(3000);
