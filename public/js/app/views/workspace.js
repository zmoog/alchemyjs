define(['backbone', 'handlebars', 'text!app/tpl/workspace.html'], function(Backbone, Handlebars, html) {

	var template = Handlebars.compile(html);

	return Backbone.View.extend({

		render: function () {

			this.$el.html(template(this.model));

			return this;
		}
	});
});