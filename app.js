'use strict'

var bodyParser = require('body-parser');
var express = require('express');

var app = express();
var router = require('./routes');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/', router);

module.exports = app;