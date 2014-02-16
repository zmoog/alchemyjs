require(['bootstrap', 'backbone', 'app/routers/index'], function (Bootstrap, Backbone, IndexRouter) {

  console.log("Let's go!")
  //jQuery, canvas and the app/sub module are all
  //loaded and can be used here now.

  var router = new IndexRouter();

  Backbone.history.start();

});