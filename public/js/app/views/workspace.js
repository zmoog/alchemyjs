define([
    'backbone', 
    'handlebars', 
    'app/collections/project', 
    'app/views/projectlist', 
    'text!app/tpl/workspace.html'], function(Backbone, Handlebars, ProjectCollection, ProjectListView, html) {

    var template = Handlebars.compile(html);

    return Backbone.View.extend({

        initialize: function () {
            this.projectCollection = new ProjectCollection();
        },

        render: function () {

            this.$el.html(template());

            // console.log(this.projectCollection);


            var projectListView = new ProjectListView({
                collection: this.projectCollection,
                el: this.$('#projectlist')
            });

            //projectListView.render(this.$('#projectlist').el);
            this.projectCollection.fetch();

            return this;
        }
    });
});