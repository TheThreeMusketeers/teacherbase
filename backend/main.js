var express = require('express')
var mongoose = require('mongoose')
var bodyParser = require('body-parser');

var Author = require('./models/author');
var author = require('./services/authorService');

var app = express();

app.use(bodyParser.json());


mongoose.connect('mongodb://ersin:Es.12345@ds125683.mlab.com:25683/teacherbase',(error)=>{
    if(!error){
        console.log("Connected to db.");
    }
});

app.use('/author',author.router);

app.listen(8080);