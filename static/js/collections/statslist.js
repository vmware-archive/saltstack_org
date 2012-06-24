define([
    'use!underscore',
    'use!backbone'
], function(_, Backbone){
    var StatsList = Backbone.Collection.extend({
        initialize: function() {
            this.url = 'https://api.github.com/repos/saltstack/salt?callback=?';
        },
        parse: function(resp, xhr) {
            return resp.data;
        }
    });

    return StatsList;
});
