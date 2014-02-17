define(['backbone', 'underscore', 'app/views/projectlistitem'], function(Backbone, _, ProjectListItem) {

	// var template = Handlebars.compile(html);

	return Backbone.View.extend({

		initialize: function () {
			// this.collection.on("reset", this.render, this);
			// console.log('collection', this.collection);
			// this.listenTo(this.collection, 'sync', function() {console.log('event occurred')});
			this.listenTo(this.collection, 'sync', this.render);
		},

		render: function () {

			// console.log('rendering collection', this.collection);
			// console.log('rendering collection models', this.collection.models);

			this.$el.empty();

			var self = this;

			_.each(this.collection.models, function (project) {

				// console.log('rendering model with name ', project.get('name'));

				var view = new ProjectListItem({model: project});

				// console.log('view', view);
				// console.log('el', self.$el);

				var el = view.render().el;

				// console.log('el', el);

				self.$el.append(el);
			});

			return this;
		}
	});
});