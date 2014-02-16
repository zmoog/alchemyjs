define(['backbone', 'app/models/project'], function(Backbone, Project) {
    
    'strict mode';

    return Backbone.Collection.extend({

    	model: Project,
    	url: '/api/v1/project/'
    });
});