define([
    'jquery',
    'use!underscore',
    'use!backbone',
    'collections/accolades'
], function($, _, Backbone, Commits){
    var AppView = Backbone.View.extend({
        commits: Commits,
        el: $('#b-commits'),
        template: _.template($('#b-commits-tmpl').html()),

        initialize: function() {
            // this.commits.fetch();
            this.commits.fetch();
            this.commits.bind('all', this.render, this);
        },

        render: function() {
            $(this.el).html(this.template({'commits': this.commits.toJSON()}));
            return this;
        }
    });

    return AppView;
});
