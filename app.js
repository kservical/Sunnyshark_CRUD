var express = require("express");
var bodyParser = require('body-parser');
var nunjucks = require('nunjucks');
var mongoose = require("mongoose");
const PORT = process.env.PORT || 5000

mongoose.connect("mongodb://<user_db>:<password_db>@host_db")
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
