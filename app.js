var express = require('express');
var http = require('http');
var path = require('path');
var uuid = require('uuid');
var times = require('times');

var app = express();

// all environments
app.set('port', process.env.PORT || 1803);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
	res.render('index');
});

app.post('/generate/:units', function(req, res) {
	var uuidList = [];
	var units = parseInt(req.params.units);
	var startTime = new Date().getTime();
	if(units>0){
		(units).times(function(){
			uuidList.push(uuid.v4());
		});
	}

	var endTime = new Date().getTime();
	res.json({uuids: uuidList, time: (endTime - startTime)});
});


http.createServer(app).listen(app.get('port'), function() {
	console.log('Express server listening on port ' + app.get('port'));
});
