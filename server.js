'use strict';

require('dotenv').config();

const express       = require('express'),
  app               = express(),
  port              = process.env.PORT || 8000,
  secret            = process.env.SECRET || 'my-super-secret',
  expressLayouts    = require('express-ejs-layouts'),
  bodyParser        = require('body-parser'),
  cookieParser      = require('cookie-parser');

// Set Views
app.set('view engine', 'ejs');
app.use(expressLayouts);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set sessions and cookie parser
app.use(cookieParser(secret));

// Set public directories
app.use('/public', express.static(__dirname + '/public'));

// Set routes
app.use(require('./app/routes'));


var server = app.listen(port, function() {
  var address = server.address().address;
  var addressPort = server.address().port;
  var addressFamily = server.address().family;
  console.log('Server running on http://%s:%s at %s', address, addressPort, addressFamily);
});

module.exports = app;
