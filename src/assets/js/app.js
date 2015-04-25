define([
    'backbone',
    'marionette'
], function (
    Backbone,
    Marionette
) {
    'use strict';

    var app = new Marionette.Application();

    app.addRegions({
        mainRegion: '#main-region'
    });

    app.StaticView = Marionette.ItemView.extend({
       template: '#static-template'
    });

    app.on('start', function() {
        Backbone.history.start();
        console.log('started');

        var staticView = new app.StaticView();
        app.mainRegion.show(staticView);
    });

    return app;
});