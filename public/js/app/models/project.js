define(['backbone'], function(Backbone) {
    
    'strict mode';

    return Backbone.Model.extend({
        urlRoot: '/api/v1/project'
    });
});