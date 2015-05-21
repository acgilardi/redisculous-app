define(['marionette'], function (Marionette) {
    'use strict';

    var app = new Marionette.Application();

    app.addRegions({
        mainRegion: '#main-region'
    });

    app.navigate = function(route, options) {
        options || (options = {});
        Backbone.history.navigate(route, options);
    };

    app.getCurrentRoute = function() {
        return Backbone.history.fragment;
    };

    app.startSubApp = function(appName, args){
        var currentApp = appName ? app.module(appName) : null;
        if (app.currentApp === currentApp){ return; }

        if (app.currentApp){
            app.currentApp.stop();
        }

        app.currentApp = currentApp;
        if(currentApp){
            currentApp.start(args);
        }
    };

    app.on('before:start', function() {
        var RegionContainer = Marionette.LayoutView.extend({
            el: "#app-container",

            regions: {
                header: "#header-region",
                main: "#main-region",
                dialog: "#dialog-region"
            }
        });
        app.regions = new RegionContainer();
    });

    app.on('start', function() {
        console.log('started');
        if(Backbone.history) {
            require(['apps/contacts/contacts_app'], function () {
                Backbone.history.start({
                    pushState: false,
                    root: '/',
                    silent: false
                });

                if(app.getCurrentRoute() === '/' || app.getCurrentRoute() === ''){
                    app.trigger("contacts:list");
                }
            });
        }
    });

    return app;
});
