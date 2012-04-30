// Filename: views/projects/list
define([
    'jQuery',
    'Underscore',
    'Backbone',
    // Pull in the Collection module from above
    'collections/projects',
    'text!templates/projects/list'
], function(_, Backbone, projectsCollection, projectsListTemplate){
    var projectListView = Backbone.View.extend({
        el: $("#container"),
    initialize: function(){
        this.collection = new projectsCollection;
        this.collection.add({ name: "Ginger Kid"});
        // Compile the template using Underscores micro-templating
        var compiledTemplate = _.template( projectsListTemplate, { projects: this.collection.models } );
        this.el.html(compiledTemplate);
    }
    });
    // Returning instantiated views can be quite useful for having "state"
    return new projectListView;
});
