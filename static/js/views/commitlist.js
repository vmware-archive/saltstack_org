define([
    'jquery',
    'use!underscore',
    'use!backbone',
    'collections/commitlist',
    'collections/issuelist'
], function($, _, Backbone, CommitList, IssueList){
    var AppView = Backbone.View.extend({
        commitlist: $('#b-commitlist'),
        commitlisttmpl: _.template($('#b-commitlist-tmpl').html()),

        issuelist: $('#b-issuelist'),
        issuelisttmpl: _.template($('#b-issuelist-tmpl').html()),

        initialize: function() {
            CommitList.fetch();
            CommitList.bind('all', this.render, this);

            IssueList.fetch();
            IssueList.bind('all', this.render, this);
        },

        render: function() {
            $(this.commitlist).html(this.commitlisttmpl({'commitlist': CommitList.toJSON()}));
            $(this.issuelist).html(this.issuelisttmpl({'issuelist': IssueList.toJSON()}));
            return this;
        }
    });

    return AppView;
});
