requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: '/components',

    config: {
        'app/views/layout': {
            user: $ALCHEMY_USER
        }
    },

    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {

        'app': '/js/app',

        'backbone': 'backbone/backbone-min',
        'bootstrap': 'bootstrap/dist/js/bootstrap.min',
        'handlebars': 'handlebars/handlebars.min',
        'jquery': 'jquery/jquery.min',
        'text': 'requirejs-text/text',
        'underscore': 'underscore/underscore'
    },

    shim: {
        'backbone': {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        },
        'bootstrap': {
            deps: ['jquery']
        },
        'handlebars': {
            exports: 'Handlebars'
        },
        'underscore': {
        	exports: '_'
        }
    }
});

// // Start the main app logic.
// requirejs(['bootstrap', 'backbone', 'app/routers/router'], function (Bootstrap, Backbone, Router) {
//     //jQuery, canvas and the app/sub module are all
//     //loaded and can be used here now.

//     var router = new Router();

//     console.log('router', router);

//     Backbone.history.start();

// });


  // require(['bootstrap', 'backbone', 'app/routers/index'], function (Bootstrap, Backbone, IndexRouter) {

  //     console.log("Let's go!")
  //     //jQuery, canvas and the app/sub module are all
  //     //loaded and can be used here now.

  //     // var router = new Router();

  //     // console.log('router', router);

  //     Backbone.history.start();

  // });