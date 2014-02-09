/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var about = require('./routes/about');
var account = require('./routes/account');
var analytics = require('./routes/analytics');
var hashtag = require('./routes/hashtag');
var location = require('./routes/location');
var projects = require('./routes/projects');
var transfer = require('./routes/transfer');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var engine = require('ejs-locals');

var logfmt = require("logfmt");
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
app.use(app.router);
app.use(require('less-middleware')({ src: __dirname + '/public' }));
app.use(express.static(path.join(__dirname, 'public')));


// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}


app.get('/', routes.index);
app.get('/about', about.list);
app.get('/project/:id/account', account.list);
app.get('/project/:id/analytics', analytics.list);
app.get('/project/:id/hashtag', hashtag.list);
app.get('/project/:id/location', location.list);
app.get('/project/:project_id/location/:detail_id', location.detail);
app.get('/project/:id', projects.detail);
app.get('/project/:id/transfer', transfer.list);
app.get('/users', user.list);


var ipaddress = process.env.OPENSHIFT_NODEJS_IP;
var port = Number(process.env.OPENSHIFT_NODEJS_PORT || 5000);

if (typeof ipaddress === "undefined") {

  console.warn('No OPENSHIFT_NODEJS_IP var, using 127.0.0.1');
  ipaddress = "127.0.0.1";
}

app.listen(port, ipaddress, function() {
  console.log("Listening on " + ipaddress + ":" + port);
});
