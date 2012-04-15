define([
    'jquery',
    'use!underscore',
    'use!backbone',
    'models/accolades'
], function($, _, Backbone, commit){
    var Commits = Backbone.Collection.extend({
        model: commit,
        url: 'https://api.github.com/repos/saltstack/salt/commits',

        initialize: function(){},

        parse: function(resp, xhr) {
            var list = [];

            _.each(resp, function(i) {
                _.each(['author', 'commit'], function(j) {
                    if (! i[j]) {
                        i[j] = {};
                    }
                });

                list.push(i);
            });

            return list;
        }
    });

    return new Commits();
});
