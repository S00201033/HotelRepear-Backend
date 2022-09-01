const express = require('express');
const cors = require('cors');
const app = express();

const whitelist = ['http://localhost:56882/'];

var corsOptionDelegate = (req,callback) =>{
    var corsOptions;
    if(whitelist.indexOf(req.header('Origin'))!== -1){
        corsOptions = {origin:true};
    }
    else{
        corsOptions = {origin:false};
    
    }
    callback(null,corsOptions);
}

exports.cors = cors();
exports.corWithOptions = cors(corsOptionDelegate);