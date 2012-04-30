define([
    'use!underscore',
    'use!backbone',
    'models/commit',
    'collections/ghcollection'
], function(_, Backbone, Commit, GhCollection){
    var CommitList = GhCollection.extend({
        model: Commit,
        gh_url: 'commits?callback=?',
        opt_objs: ['author', 'commit']
    });

    return CommitList;
});
