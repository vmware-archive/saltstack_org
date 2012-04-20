require.config({
    paths: {
        // Require.js plugins
        use: 'libs/use',
        text: 'libs/text',
        order: 'libs/order',

        // Major libs
        jquery: 'libs/jquery.min',

        // Non-AMD libs (for use with !use plugin)
        underscore: 'libs/underscore-min',
        backbone: 'libs/backbone-min',
        bootstrap: 'libs/bootstrap.min',

        // Misc
        util: 'util',
        templates: '../templates'
    },
    use: {
        'underscore': {
            attach: '_'
        },
        'backbone': {
            deps: ['use!underscore', 'jquery'],
            attach: function(_, $) {
                return Backbone;
            }
        },
        'bootstrap': {
            deps: ['jquery']
        }
    },
    urlArgs: "bust=" +  (new Date()).getTime()
});

// Init the Bootstrap carousel
require(['jquery', 'use!bootstrap'], function($){
    $(document).ready(function(){
        $('.hero-unit .carousel').carousel({
            interval: 2000
        });
    });
});

// Init main backbone app
require([
    'jquery',
    'views/accolades',
    'util'
], function($, AppView){
    $(document).ready(function(){
        var appView = new AppView();
        appView.render();
    });
});
