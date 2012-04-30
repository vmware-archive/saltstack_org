define([
    'use!underscore',
    'use!backbone',
    'models/issue',
    'collections/ghcollection'
], function(_, Backbone, issue, GhCollection){
    var IssueList = GhCollection.extend({
        model: issue,
        gh_url: 'issues?callback=?&state=closed',
        opt_objs: []
    });

    return IssueList;
});
