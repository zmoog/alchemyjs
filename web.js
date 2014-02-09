// web.js
var express = require("express");
var logfmt = require("logfmt");
var app = express();

app.use(logfmt.requestLogger());

app.get('/', function(req, res) {
  res.send('Hello World!');
});

var ipaddress = process.env.OPENSHIFT_NODEJS_IP;
var port = Number(process.env.OPENSHIFT_NODEJS_PORT || 5000);

if (typeof ipaddress === "undefined") {

  console.warn('No OPENSHIFT_NODEJS_IP var, using 127.0.0.1');
  ipaddress = "127.0.0.1";
}

app.listen(port, ipaddress, function() {
  console.log("Listening on " + ipaddress + ":" + port);
});
