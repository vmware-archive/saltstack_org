define([
    'underscore',
    'backbone',
    'collections/ghcollection'
], function(_, Backbone, GhCollection){
    var IssueList = GhCollection.extend({
        gh_url: '/issues?callback=?&state=closed',
        opt_objs: []
    });

    return IssueList;
});
