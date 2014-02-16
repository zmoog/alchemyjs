/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var about = require('./routes/about');
var home = require('./routes/home');
var account = require('./routes/account');
var analytics = require('./routes/analytics');
var hashtag = require('./routes/hashtag');
var location = require('./routes/location');
var login = require('./routes/login');
var projects = require('./routes/projects');
var transfer = require('./routes/transfer');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var engine = require('ejs-locals');

var logfmt = require("logfmt");

var config = require('./config');


var apiProject = require('./routes/api/project');

// Custom middleware

var userinfo = function(req, res, next) {
	res.locals.user = req.user;
	next();
};


// Passport

var passport = require('passport');
// var LocalStrategy = require('passport-local').Strategy;
var GoogleStrategy = require('passport-google').Strategy;

// passport.use(new LocalStrategy(function(username, password, done) {

// 	console.log(username, password);

// 	return done(null, {id: 'zmoog', name: 'Maurizio Branca'});
// }));

// passport.use(new GoogleStrategy({
// 	returnURL: 'http://alchemy.zmoog.org/auth/google/return',
// 	realm: 'http://alchemy.zmoog.org'
// 	},
// 	function(identifier, profile, done) {
// 		console.log(identifier, profile, done);
// 		done(null, user);
// 	}
// ));


// Passport session setup.
//   To support persistent login sessions, Passport needs to be able to
//   serialize users into and deserialize users out of the session.  Typically,
//   this will be as simple as storing the user ID when serializing, and finding
//   the user by ID when deserializing.  However, since this example does not
//   have a database of user records, the complete Google profile is serialized
//   and deserialized.
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});


// Use the GoogleStrategy within Passport.
//   Strategies in passport require a `validate` function, which accept
//   credentials (in this case, an OpenID identifier and profile), and invoke a
//   callback with a user object.
passport.use(new GoogleStrategy({
    // returnURL: 'http://alchemyjs-zmoog.rhcloud.com/auth/google/return',
    // realm: 'http://alchemyjs-zmoog.rhcloud.com/'
    returnURL: config.baseurl + '/auth/google/return',
    realm: config.baseurl + '/'

  },
  function(identifier, profile, done) {
    // asynchronous verification, for effect...
    process.nextTick(function () {
      
      // To keep the example simple, the user's Google profile is returned to
      // represent the logged-in user.  In a typical application, you would want
      // to associate the Google account with a user record in your database,
      // and return that user instead.
      profile.identifier = identifier;
      return done(null, profile);
    });
  }
));



// var authenticate = passport.authenticate('local', {
// 	successRedirect: '/',
// 	failureRedirect: '/login',
// 	failureFlash: false
// });

var app = express();



// template engine
app.engine('ejs', engine);

// all environments
// app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
// app.use(express.logger('dev'));
app.use(logfmt.requestLogger());
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(passport.initialize());
app.use(passport.session());
app.use(userinfo);
app.use(app.router);
app.use(require('less-middleware')({ src: __dirname + '/public' }));
app.use(express.static(path.join(__dirname, 'public')));


var usercache = {};

// Passport session



//
// Passport - Google
//
// will redirect the user back to the application at
//     /auth/google/return

// GET /auth/google
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  The first step in Google authentication will involve redirecting
//   the user to google.com.  After authenticating, Google will redirect the
//   user back to this application at /auth/google/return
app.get('/auth/google', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });

// GET /auth/google/return
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  If authentication fails, the user will be redirected back to the
//   login page.  Otherwise, the primary route function function will be called,
//   which, in this example, will redirect the user to the home page.
app.get('/auth/google/return', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/u/');
  });

app.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

// Redirect the user to Google for authentication.  When complete, Google

// Simple route middleware to ensure user is authenticated.
//   Use this route middleware on any resource that needs to be protected.  If
//   the request is authenticated (typically via a persistent login session),
//   the request will proceed.  Otherwise, the user will be redirected to the
//   login page.
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/auth/google')
}

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}




//  app.post('/login', authenticate);
// app.get('/login', login.detail);

app.get('/', routes.index);
app.get('/about', about.detail);
app.get('/u', ensureAuthenticated, home.detail);
app.get('/project/:id/account', ensureAuthenticated, account.list);
app.get('/project/:id/analytics', ensureAuthenticated, analytics.list);
app.get('/project/:id/hashtag', ensureAuthenticated, hashtag.list);
app.get('/project/:id/location', ensureAuthenticated, location.list);
app.get('/project/:project_id/location/:detail_id', ensureAuthenticated, location.detail);
app.get('/project/:id', ensureAuthenticated, projects.detail);
app.get('/project/:id/transfer', ensureAuthenticated, transfer.list);
app.get('/users', ensureAuthenticated, user.list);

// API

// app.get('/api/v1/project', ensureAuthenticated, apiProject.list);
app.get('/api/v1/project', ensureAuthenticated, apiProject.list);
app.get('/api/v1/project/:id', ensureAuthenticated, apiProject.detail);


app.listen(config.port, config.ipaddress, function() {
  console.log("Listening on " + config.ipaddress + ":" + config.port);
});
