define([
    'use!underscore',
    'use!backbone'
], function(_, Backbone){
    var GhCollection = Backbone.Collection.extend({
        initialize: function() {
            this.url = 'https://api.github.com/repos/saltstack/salt/' + this.gh_url;
        },

        parse: function(resp, xhr) {
            var list = [];

            _.each(resp.data, function(i) {
                _.each(this.opt_objs, function(j) {
                    if (! i[j]) i[j] = {};
                });

                list.push(i);
            });

            return list;
        }
    });

    return GhCollection;
});
