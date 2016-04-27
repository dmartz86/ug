'use strict';
const express = require('express');
const http = require('http');
const path = require('path');
const uuid = require('uuid');

const app = express();

// all environments
app.set('port', process.env.PORT || 1803);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/generate/:units', generate);

function generate(req, res) {
  const uuid = require('uuid');
  const uuidList = [];
  const limit = 1000;
  const units = parseInt(req.params.units);

  if ( units > 0 ){
    if ( units >limit ){ units = limit;}
    for ( let i = 0; i < units; i++ ) {
      uuidList.push(uuid.v4());
    }
  }

  res.json(
    {
      uuids: uuidList,
      ts: new Date().getTime()
    }
  );
}

http.createServer(app).listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
