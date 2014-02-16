define(['backbone', 'app/views/layout/index'], function (Backbone, IndexLayoutView) {
	'use strict';

	var layoutView = new IndexLayoutView({el: '#layout'});

	return Backbone.Router.extend({

		routes: {
			'': 'home'
		},

		home: function () {
			layoutView.render();
		},

	});
});
