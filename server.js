'use strict';

require('dotenv').config();

const express       = require('express'),
  app               = express(),
  port              = process.env.PORT || 8000,
  secret            = process.env.SECRET || 'my-super-secret',
  expressLayouts    = require('express-ejs-layouts'),
  bodyParser        = require('body-parser'),
  cookieParser      = require('cookie-parser'),
  mongoose          = require('mongoose'),
  session           = require('express-session'),
  MongoSession      = require('connect-mongo')(session);

// Set Views
app.set('view engine', 'ejs');
app.use(expressLayouts);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set mongoDB
mongoose.connect(process.env.DB_URI, {
    auth: {
      user: process.env.DB_USER,
      password: process.env.DB_USER_PASS
    }
  })
  .then(() => console.log('db connection successful'))
  .catch((err) => console.error('db connection unsuccessful:', err));
mongoose.Promise = global.Promise;

var sessionMiddleware = session({
  store: new MongoSession({
    mongooseConnection: mongoose.connection
  }),
  cookie: {
    maxAge: 60000,
    secure: true
  },
  secret: secret,
  resave: false,
  saveUninitialized: false
});

// Set sessions and cookie parser
app.use(cookieParser(secret));
app.use(function (req, res, next) {
  var tries = 3
  function lookupSession(error) {
    if (req.session !== undefined) {
      return next();
    }
    if (error) {
      return next(error);
    }
    tries -= 1;
    if (tries < 0) {
      return next(new Error('Oh no! Lost the session!'));
    }
    sessionMiddleware(req, res, lookupSession);
  }
  lookupSession();
})

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
