define(['backbone', 'app/views/navbar', 'app/views/project'], function(Backbone, NavbarView, ProjectView) {

    var navbarView = new NavbarView({model: {navs: []}});
    // var projectView = new ProjectView();

    return Backbone.View.extend({

        render: function (projectId) {

            // this.model.fetch();

            this.$('#navbar').html(navbarView.render().el);

            // this.$('#content').html(projectView.render(this.model.attributes).el);

            var view = new ProjectView({
                el: $('#content'),
                projectId: projectId
            });

            return this;
        }
    });
});