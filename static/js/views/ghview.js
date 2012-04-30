define([
    'jquery',
    'use!backbone'
], function($, Backbone){
    var GhView = Backbone.View.extend({
        tagName: 'li',

        events: {
            // 'click .gh_refresh': 'fetch'
        },

        initialize: function() {
            this.collection.bind('all', this.render, this);
            this.collection.fetch();
        },

        render: function() {
            var template = this.options.template;
            $(this.$el).html(template({'objslist': this.collection.toJSON()}));
            return this;
        }
    });

    return GhView;
});
