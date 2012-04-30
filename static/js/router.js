define([
    'jquery',
    'use!underscore',
    'router',
    'models/commit',
    'models/issue',
    'collections/commitlist',
    'collections/issuelist',
    'views/ghview',
    'util'
], function($, _, Router, Commit, Issue, CommitList, IssueList, GhView){
    var SSorgRouter = Backbone.Router.extend({
        routes: {
            '': 'index',
            '/communicate': 'communicate'
        },

        index: function() {
            console.info("Executing 'index' route.");
            // Grab commits
            var commitView = new GhView({
                model: Commit,
                collection: new CommitList(),
                el: $('#b-commitlist'),
                template: _.template($('#b-commitlist-tmpl').html())
            }).render();

            // Grab issues
            var issueView = new GhView({
                model: Issue,
                collection: new IssueList(),
                el: $('#b-issuelist'),
                template: _.template($('#b-issuelist-tmpl').html())
            }).render();
        },

        communicate: function() {
            console.info("Executing 'communicate' route.");
        }
    });

    return SSorgRouter;
});
