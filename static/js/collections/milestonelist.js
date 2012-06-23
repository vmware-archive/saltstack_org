define([
    'use!underscore',
    'use!backbone',
    'models/issue',
    'collections/ghcollection'
], function(_, Backbone, issue, GhCollection){
    var MilestoneList = GhCollection.extend({
        model: issue,
        gh_url: '/milestones?callback=?',
        opt_objs: []
    });

    return MilestoneList;
});
