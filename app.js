//storing dependencies into a variable 

var express = require('express');
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

// Storing port number and our full page 

var port = 3000;
var app = express();

// STEP1: Setting up the bollerplate and routing 

app.get('/', function(req, res){
    
    
    // All the web scraping magic will happen here 
    
    res.send('Hello world');
    });

app.listen(port);
console.log('Magic happens on port ' + port);

exports = module.experts = app;