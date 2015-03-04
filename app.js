var express = require('express');
var http = require('http');
var path = require('path');
var uuid = require('uuid');

var app = express();

// all environments
app.set('port', process.env.PORT || 1803);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/generate/:units', function(req, res) {
  var uuidList = [];
  var limit = 1000;
  var units = parseInt(req.params.units);
  var startTime = new Date().getTime();

  if ( units > 0 ){
    if ( units >limit ){ units = limit;}
    for ( var i = 0; i < units; i++ ) {
      uuidList.push(uuid.v4());
    }
  }

  var endTime = new Date().getTime();
  res.json(
    {
      uuids: uuidList,
      time: (endTime - startTime)
    }
  );
});

http.createServer(app).listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
