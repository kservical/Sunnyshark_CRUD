var express = require("express");
var bodyParser = require('body-parser');
var nunjucks = require('nunjucks');
var mongoose = require("mongoose");
const PORT = process.env.PORT || 5000

mongoose.connect("mongodb://sunnyshark:shark974@ds235243.mlab.com:35243/heroku_1xhpvthv")
require('./models/automates')

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/',require('./routes/automates'));
nunjucks.configure('views',{
	autoescape: true,
	express: app
});


app.listen(PORT);
