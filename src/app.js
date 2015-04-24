define([
    'backbone',
    'marionette',
    'entities/contact'
], function (
    Backbone,
    Marionette,
    Contact
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
        console.log('started');

        var contact = new Contact();
        contact.set('firstName', 'bob');
        console.log(contact);

        var staticView = new app.StaticView(contact);
        app.mainRegion.show(staticView);
    });

    return window.app = app;
});