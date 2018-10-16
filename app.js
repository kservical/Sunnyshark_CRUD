var express = require("express");
var bodyParser = require('body-parser');
var nunjucks = require('nunjucks');
var mongoose = require("mongoose");


mongoose.connect("mongodb://localhost:27017/sunnyshark");
require('./models/automates')

var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/',require('./routes/automates'));
nunjucks.configure('views',{
	autoescape: true,
	express: app
});


app.listen(3000);
