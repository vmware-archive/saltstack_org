define([
    'jquery',
    'use!underscore',
    'router',
    'collections/commitlist',
    'collections/issuelist',
    'collections/issuerfelist',
    'collections/milestonelist',
    'collections/statslist',
    'views/ghview',
    'util'
], function($, _, Router, CommitList, IssueList, IssueRFEList,
        MilestoneList, StatsList, GhView){
    var SSorgRouter = Backbone.Router.extend({
        routes: {
            '': 'index',
            '/learn': 'learn'
        },

        index: function() {
            // Grab commits
            var commitView = new GhView({
                collection: new CommitList(),
                el: $('#b-commitlist'),
                template: _.template($('#b-commitlist-tmpl').html())
            });

            // Grab issues
            var issueView = new GhView({
                collection: new IssueList(),
                el: $('#b-issuelist'),
                template: _.template($('#b-issuelist-tmpl').html())
            });

            // Grab RFE
            var issueRFEView = new GhView({
                collection: new IssueRFEList(),
                el: $('#b-issuerfelist'),
                template: _.template($('#b-issuerfelist-tmpl').html())
            });

            // Grab milestones
            var milestoneView = new GhView({
                collection: new MilestoneList(),
                el: $('#b-milestonelist'),
                template: _.template($('#b-milestonelist-tmpl').html())
            });

            // Grab stats
            var statsView = new GhView({
                collection: new StatsList(),
                el: $('#b-statslist'),
                template: _.template($('#b-statslist-tmpl').html())
            });
        },

        learn: function() {
            console.info("Executing 'learn' route.");
        }
    });

    return SSorgRouter;
});
