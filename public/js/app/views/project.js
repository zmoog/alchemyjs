define([
	'backbone', 
	'handlebars', 
	'app/models/project', 
	'text!app/tpl/project.html'], function(Backbone, Handlebars, Project, html) {

	var template = Handlebars.compile(html);

	return Backbone.View.extend({

		initialize: function (options) {

			console.log('options', options);

			this.model = new Project({id: options.projectId});

			this.listenTo(this.model, 'sync', this.render);

			this.model.fetch();

			// console.log('view has been initialized');
		},

		render: function () {

			// console.log('rendering view', this.model.attributes);

			this.$el.html(template(this.model.attributes));

			return this;
		}
	});
});