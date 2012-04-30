define([
    'jquery',
    'use!backbone'
], function($, Backbone){
    var GhView = Backbone.View.extend({
        tagName: 'li',

        events: {
            'click .gh_refresh': 'fetch'
        },

        initialize: function() {
            this.collection.fetch();
            this.model.bind('all', this.render, this);
        },

        render: function() {
            $(this.$el).html(this.template({'objslist': this.model.toJSON()}));
            return this;
        }
    });

    return GhView;
});
