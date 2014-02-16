define(['backbone', 'app/views/layout'], function (Backbone, LayoutView) {
	'use strict';

	var layoutView = new LayoutView({el: '#layout'});

	return Backbone.Router.extend({

		routes: {
			'': 'home',
			'project/:id': 'project'
		},

		home: function () {
			layoutView.render();
		},

		project: function (projectId) {
			Backbone.trigger('project:open', projectId);
		}

	});
});
