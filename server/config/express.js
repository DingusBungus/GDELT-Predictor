var path = require('path'),  
    express = require('express'), 
    mongoose = require('mongoose'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    config = require('./config'),
    listingsRouter = require('../routes/listings.server.routes');

module.exports.init = function() {

  //initialize app
  var app = express();

  //enable request logging for development debugging
  app.use(morgan('dev'));

  //body parsing middleware 
  app.use(bodyParser.json());

  /* serve static files */
  app.use('/', express.static(__dirname + '/../../client'));
  app.use('/public', express.static(__dirname + '/../../public'));

  /* go to homepage for all routes not specified */
   app.all('/*', function(req, res) {
    res.redirect('/index.html');
   });
  
  return app;
};  