define([
    'use!underscore',
    'use!backbone',
    'models/issue',
    'collections/ghcollection'
], function(_, Backbone, issue, GhCollection){
    var IssueRFEList = GhCollection.extend({
        model: issue,
        gh_url: 'issues?callback=?&labels=RFE&sort=updated',
        opt_objs: []
    });

    return IssueRFEList;
});
