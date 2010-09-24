//-- Jasmine Server: A Simple Server & Client for running automated Jasmine Tests!

/* Requires */
var express = require('express');
var io = require('socket.io');
var http = require('http');


/*
 * Express Base =============================================================
 *
 * Used to handle requests and serve our public files
 */
  

//Create our App
var app = express.createServer();

//Set App properties
app.set('views', __dirname + '/views');
app.use(express.staticProvider(__dirname + '/public'));


/*
 * =Routing
 */
app.get('/', function(req, res){
    res.send('Hello World');
});


/*
 * Socket.IO ================================================================
 *
 * Configures how Socket IO should behave! 
 */



/*
 * Listeners ================================================================
 *
 * Attach all our goodies to an actual port =)
 */
  

// Listeners on port 3000
app.listen(3000);
var socket = io.listen(app);
