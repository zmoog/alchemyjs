define(['backbone', 'handlebars', 'text!app/tpl/navbar.html'], function(Backbone, Handlebars, html) {

	var template = Handlebars.compile(html);

	return Backbone.View.extend({

		initialize: function (options) {
			this.model = options.model;
		},

		render: function () {

			this.$el.html(template(this.model));

			this.$('.dropdown-toggle').dropdown();

			return this;
		}
	});
});