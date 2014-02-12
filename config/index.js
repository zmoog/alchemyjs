
var ipaddress = process.env.OPENSHIFT_NODEJS_IP;
var port = Number(process.env.OPENSHIFT_NODEJS_PORT || 5000);

var baseurl = process.env.ALCHEMYJS_BASE_URL;

if (typeof ipaddress === "undefined") {
  console.warn('No OPENSHIFT_NODEJS_IP var, using 127.0.0.1');
  ipaddress = "127.0.0.1";
}

if (typeof baseurl === "undefined") {
    baseurl = "http://alchemyjs-zmoog.rhcloud.com";
}

module.exports = {
    ipaddress: ipaddress,
    port: port,
    baseurl: baseurl
}
