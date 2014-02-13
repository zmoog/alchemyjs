define(['backbone', 'app/views/navbar', 'app/views/landing'], function(Backbone, NavbarView, LandingView) {

	// var template = Handlebars.compile(html);

	var navbarView = new NavbarView({model: {navs: []}});
	var landingView = new LandingView();

	return Backbone.View.extend({

		render: function () {

			// this.$el.html(template());

			this.$('#navbar').html(navbarView.render().el);

			this.$('#content').html(landingView.render().el);

			return this;
		}
	});
});