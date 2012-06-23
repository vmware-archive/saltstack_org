define([
    'use!underscore',
    'use!backbone',
    'models/issue'
], function(_, Backbone, issue){
    var StatsList = Backbone.Collection.extend({
        model: issue,
        initialize: function() {
            this.url = 'https://api.github.com/repos/saltstack/salt?callback=?';
        },
        parse: function(resp, xhr) {
            return resp.data;
        }
    });

    return StatsList;
});
