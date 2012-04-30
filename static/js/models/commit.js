define([
    'use!underscore',
    'use!backbone'
], function(_, Backbone) {
    var Commit = Backbone.Model.extend({
        defaults: {
            sha: ''
        },
        initialize: function(){
        }
    });

    return Commit;
});
