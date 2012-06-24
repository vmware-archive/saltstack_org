define([
    'use!underscore',
    'use!backbone',
    'collections/ghcollection'
], function(_, Backbone, GhCollection){
    var IssueRFEList = GhCollection.extend({
        gh_url: '/issues?callback=?&labels=RFE&sort=updated',
        opt_objs: []
    });

    return IssueRFEList;
});
