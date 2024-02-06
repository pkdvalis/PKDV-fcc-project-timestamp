// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

//Return current Date
app.get("/api/", function (req, res) {
  let newtime = new Date()
  res.json({unix: newtime.getTime(),
           utc: newtime.toUTCString()});
});

//Date format
app.get('/api/:input', function(req, res) {
    
  if (new Date(req.params.input) != "Invalid Date") {

      let newtime = new Date(req.params.input)
      res.json({unix: newtime.getTime(),
               utc: newtime.toUTCString()});

    } else if (new Date(parseInt(req.params.input)) != "Invalid Date") {

      let newtime = new Date(parseInt(req.params.input))
      res.json({unix: newtime.getTime(),
               utc: newtime.toUTCString()});

    } else {
    res.json({error: "Invalid Date"});
  }
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
