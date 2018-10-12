var express = require('express');
var jwt = require('jwt-simple');
var router = express.Router();

var User = require('../models/user');

router.post('/register',(request,response)=>{
    var userData = request.body;
    var user = new User(userData);

    user.save((error,result)=>{
        if(error) console.log("Error register the user");

        return response.status(201).send({message:'Created'});
    });
});

router.post('/login',async (request,response)=>{
    var userData = request.body;
    var user = await User.findOne({email:userData.email});
    if(!user){
        return response.sendStatus(401).send({message:"Email or passwor is invalid."});
    }

    if(userData.password != user.password){
        return response.sendStatus(401).send({message:"Email or passwor is invalid."});
    }

    var payload = {}
    var token = jwt.encode(payload,"12345");
    return response.status(200).send({access_token:token});
});

var user = {router};

module.exports = user;