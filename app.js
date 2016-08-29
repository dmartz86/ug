const port = 1803;
const express = require('express');
const http = require('http');
const path = require('path');
const util = require('util');
const app = express();

app.set('port', process.env.PORT || port);
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

http.createServer(app).listen(port, () => util.log(`Listening on port ${port}`));
