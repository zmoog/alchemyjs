define([
	'backbone', 
	'app/views/layout',
	'app/views/layout/project',
	'app/models/project'], function (Backbone, LayoutView, ProjectLayoutView, Project) {

	'use strict';

	var layoutView = new LayoutView({el: '#layout'});
	var projectLayoutView = new ProjectLayoutView({el: '#layout'});

	return Backbone.Router.extend({

		routes: {
			'': 'home',
			'project/:project': 'project',
			'project/:project/account': 'account_list',
			'project/:project/account/:account': 'account_detail'
		},

		home: function () {
			layoutView.render();
		},

		project: function (projectId) {

			// console.log('opening project ' + projectId);
			// Backbone.trigger('project:open', projectId);

			// var view = new ProjectLayoutView({
			// 	el: '#layout',
			// 	// model: new Project({id: projectId})
			// 	// ,
			// 	projectId: projectId
			// });

			// view.render();

			projectLayoutView.render(projectId);
		},

		account_list: function (projectId) {
			console.log('account_list', projectId);
		},

		account_detail: function (projectId, accountId) {
			console.log('account_detail', projectId, accountId);
		}
	});
});
