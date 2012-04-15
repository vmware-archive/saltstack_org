define([
    'use!underscore',
    'use!backbone'
], function(_, Backbone) {
    var commit = Backbone.Model.extend({
        defaults: {
            sha: ''
        },
        initialize: function(){
        }
    });

    return commit;
});
