define(['backbone', 'app/views/layout'], function (Backbone, LayoutView) {
	'use strict';

	// console.log('starting router');

	var layoutView = new LayoutView({el: '#layout'});

	return Backbone.Router.extend({

		routes: {
			'': 'home',
			'home': 'home'
		},

		home: function () {
			// console.log('routing home');

			layoutView.render();
		}

	});
});
