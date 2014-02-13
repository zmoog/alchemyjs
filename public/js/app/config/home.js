require(['bootstrap', 'backbone', 'app/routers/router'], function (Bootstrap, Backbone, Router) {

  console.log("Let's go!")
  //jQuery, canvas and the app/sub module are all
  //loaded and can be used here now.

  var router = new Router();

  // console.log('router', router);

  Backbone.history.start();

});