//-- Jasmine Server: A Simple Server & Client for running automated Jasmine Tests!

// Requires
var express = require('express'),
    io = require('socket.io'),
    http = require('http'),
    sys = require('sys'),
    fs = require('fs'),

// App Vars 
    app = express.createServer(),
    zombies = [], // Raaaaawwrr -- our browsers that do our testing
    results = [];

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

var socket = io.listen(app, {
  log: function () { }
});
socket.on('connection', function(client) {

});
socket.on('clientMessage', function(message, client) {
  switch(message) {
    case 'newClient':
      zombies.push(client);
      break;
    default:
      var results = JSON.parse(message);
      sys.puts(results);
      break;
  }
});

/*
 * Watchers =================================================================
 *
 * I be watchin you, watchin me, yeah you know!
 */
fs.watchFile(__dirname + '/public/spec/', { interval: 5 }, function (curr, prev) {
  if (curr.mtime.toString() === prev.mtime.toString()) {
    return;
  } else {
    sys.puts("still say me");
  }
  for(i = 0, len = zombies.length; i < len; i++) {
    zombies[i].send('run');
  }
});

/*
 * Listeners ================================================================
 *
 * Attach all our goodies to an actual port =)
 */
app.listen(3000);
