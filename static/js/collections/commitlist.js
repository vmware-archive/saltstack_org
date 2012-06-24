define([
    'use!underscore',
    'use!backbone',
    'collections/ghcollection'
], function(_, Backbone, GhCollection){
    var CommitList = GhCollection.extend({
        gh_url: '/commits?callback=?',
        opt_objs: ['author', 'commit']
    });

    return CommitList;
});
