define(['backbone', 
	'handlebars', 
	'app/views/navbar',
	'app/views/workspace',
	 'text!app/tpl/layout.html', 
	 'module'], function(Backbone, Handlebars, NavbarView, WorkspaceView, html, module) {

	var template = Handlebars.compile(html);



	var navbar = {

		navs: [
			{
				classes: 'navbar-right',
				items: [
					{
						label: module.config().user.displayName, 
						href: '#',
						dropdown: [
							{label: 'a', href: '#'}
						]
					}
				]
			},
		]

	};


	var navbarView = new NavbarView({model: navbar});

	var workspaceView = new WorkspaceView();

	return Backbone.View.extend({

		renderNavbar: function () {
			this.$el.find('#navbar').html(navbarView.render().el);
		},

		renderWorkspace: function () {
			this.$el.find('#content').html(workspaceView.render().el);
		},

		render: function () {

			this.$el.html(template());

			// this.$el('#navbar').html(navbarView.render().el);
			this.renderNavbar();

			this.renderWorkspace();

			return this;
		}

	});
});