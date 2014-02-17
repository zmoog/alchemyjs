define([
    'backbone', 
    'handlebars', 
    'app/collections/project', 
    'app/views/projectlist', 
    'text!app/tpl/workspace.html'], function(Backbone, Handlebars, ProjectCollection, ProjectListView, html) {

    var template = Handlebars.compile(html);

    return Backbone.View.extend({

        events: {
            'click #reloadproject': 'reloadproject'
        },

        initialize: function () {
            this.projectCollection = new ProjectCollection();
        },

        reloadproject: function () {
            this.projectCollection.fetch();
        },

        render: function () {

            this.$el.html(template());

            var projectListView = new ProjectListView({
                collection: this.projectCollection,
                el: this.$('#projectlist')
            });

            this.projectCollection.fetch();

            return this;
        }
    });
});