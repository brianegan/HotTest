//-- jasmineClient by Brian Egan
var jasmineClient = {

  listen: function() {

    // Setup our Vars
    var socket = new io.Socket(null, {port: 3000}),
        self = this;

    // Connect to our Server
    socket.connect();

    socket.on('connect', function() {
      socket.send('newClient');
    });

    // Run our tests when told!
    socket.on('message', function(message) {
      self.initRun(message);
    });
  },

  run: function() {
    var JsReporter = new jasmine.JsApiReporter(),
        TrivialReporter = new jasmine.TrivialReporter(),
        socket = new io.Socket(null, {port: 3000}),
        sendTests = function() {
          if (JsReporter.finished) {
            socket.connect();
            socket.send(JSON.stringify(JsReporter));
          } else {
            setTimeout(sendTests, 10);
          }
        };

    // Hook em up to Jasmine
    jasmine.getEnv().addReporter(TrivialReporter);
    jasmine.getEnv().addReporter(JsReporter);
    jasmine.getEnv().execute();

    sendTests();

  },

  initRun: function(message) {
    if (message === 'run') {
      if(document.getElementById('testFrame')) { 
        document.getElementById('testContainer').removeChild(document.getElementById('testFrame'));
      }
      var testFrame = '<iframe src="/run.html" id="testFrame"><p>Your browser does not support iframes.</p></iframe>';
      document.getElementById('testContainer').innerHTML = testFrame;
    }
  }

};


/* 
// Create our new Socket & connect to it
var socket = new io.Socket(null, {port: 3000});
socket.connect();

var testEnv = jasmine.getEnv(),
    origEnv = Object.create(jasmine.getEnv()),
    JsReporter = {},
    TrivialReporter = {},

    clearTests = function() {
      if (document.getElementsByTagName('div')[0]) { 
        document.body.removeChild(document.getElementsByTagName('div')[0]);
      }
      testEnv = origEnv;
      JsReporter = {};
      TrivialReporter = {};
    },
    
    runTests = function() { 
      // Create our reporters
      testEnv = new jasmine.getEnv();
      JsReporter = new jasmine.JsApiReporter();
      TrivialReporter = new jasmine.TrivialReporter();

      // Hook em up to Jasmine
      testEnv.addReporter(TrivialReporter);
      testEnv.addReporter(JsReporter);
      testEnv.execute();
    };

clearTests();
runTests();
xx*
 * Wait for a message from the server. If it's
 * the correct type, run the tests, and return 
 * the object.


socket.on('message', function(message){ 

  if (message === 'run') {

//    clearTests();
  //  runTests();
    
    // Remove last test from the screen and create new fresh tests
    // document.body.removeChild(document.getElementsByTagName('div')[0]);
    // JsReporter = new jasmine.JsApiReporter();
    //TrivialReporter = new jasmine.TrivialReporter();

    // ReRun the test!!!
    // jasmine.getEnv().execute();

    //var sendResults = function() {
      //if (JsReporter.finished) {
       // socket.send(JSON.stringify(JsReporter));
      //} else {
        // setTimeout(50, sendResults());
     // }
    //};

  } 
}); */
