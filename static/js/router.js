define([
    'jquery',
    'use!underscore',
    'router',
    'models/commit',
    'models/issue',
    'collections/commitlist',
    'collections/issuelist',
    'collections/issuerfelist',
    'collections/milestonelist',
    'views/ghview',
    'util'
], function($, _, Router, Commit, Issue, CommitList, IssueList, IssueRFEList,
        MilestoneList, GhView){
    var SSorgRouter = Backbone.Router.extend({
        routes: {
            '': 'index',
            '/learn': 'learn'
        },

        index: function() {
            // Grab commits
            var commitView = new GhView({
                model: Commit,
                collection: new CommitList(),
                el: $('#b-commitlist'),
                template: _.template($('#b-commitlist-tmpl').html())
            });

            // Grab issues
            var issueView = new GhView({
                model: Issue,
                collection: new IssueList(),
                el: $('#b-issuelist'),
                template: _.template($('#b-issuelist-tmpl').html())
            });

            // Grab RFE
            var issueRFEView = new GhView({
                model: Issue,
                collection: new IssueRFEList(),
                el: $('#b-issuerfelist'),
                template: _.template($('#b-issuerfelist-tmpl').html())
            });

            // Grab milestones
            var milestoneView = new GhView({
                model: Issue,
                collection: new MilestoneList(),
                el: $('#b-milestonelist'),
                template: _.template($('#b-milestonelist-tmpl').html())
            });
        },

        learn: function() {
            console.info("Executing 'learn' route.");
        }
    });

    return SSorgRouter;
});
