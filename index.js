'use strict';

var util = require('util');
var wrapi = require('wrapi');

var endpoints = require('./api/genius.json');

function geniusWrapi(access_token) {

  var opts = {
    auth: {
      "bearer": access_token
    },
    headers: {
      "User-Agent": 'genius-wrapi',
      "Accept": 'application/json'
    },
    json: true
  };

  geniusWrapi.super_.call(this,
            'https://api.genius.com/',
            endpoints,
            opts);  
};

util.inherits(geniusWrapi, wrapi);
module.exports = geniusWrapi;
