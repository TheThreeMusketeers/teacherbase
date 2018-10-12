var express = require('express')
var mongoose = require('mongoose')
var bodyParser = require('body-parser');
var cors = require('cors');

var Author = require('./models/author');
var User = require('./models/user');

var author = require('./services/authorService');
var user = require('./services/userService');

var app = express();

app.use(cors());
app.use(bodyParser.json());


mongoose.connect('mongodb://ersin:Es.12345@ds125683.mlab.com:25683/teacherbase',(error)=>{
    if(!error){
        console.log("Connected to db.");
    }
});

app.use('/author',author.router);
app.use('/user',user.router);

app.listen(8080);