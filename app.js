'use strict'

var bodyParser = require('body-parser');
var express = require('express');

var app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.post('/:id', (req, res) => {
    console.log(req.body.nombre);
    console.log(req.query.id);
    res.status(200).send({
        message: 'Hello'
    })
});

module.exports = app;