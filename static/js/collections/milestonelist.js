define([
    'use!underscore',
    'use!backbone',
    'collections/ghcollection'
], function(_, Backbone, GhCollection){
    var MilestoneList = GhCollection.extend({
        gh_url: '/milestones?callback=?',
        opt_objs: []
    });

    return MilestoneList;
});
