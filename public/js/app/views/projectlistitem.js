define(['backbone', 'handlebars', 'text!app/tpl/projectlistitem.html'], function(Backbone, Handlebars, html) {

    'use strict';

    var template = Handlebars.compile(html);

    return Backbone.View.extend({

        tagName: 'li',
        className: 'list-group-item',

        render: function () {

            var attributes = this.model.attributes;

            //console.log('attributes', this.model.attributes;)
            console.log('model', attributes);
            console.log('attributes', attributes);

            this.$el.html(template(this.model.attributes));

            // this.$('.dropdown-toggle').dropdown();

            return this;
        }
    });
});