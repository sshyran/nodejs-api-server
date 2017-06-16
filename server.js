// server.js

const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

const app = express();

const port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
	console.log('We are live on ' + port);
});

require('./app/routes')(app, {});
