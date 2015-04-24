define([
    'app'
], function (
    App
) {
    'use strict';

    App.module('Entities.Contact', function(Entities, App, Backbone, Marionette, $, _) {
        var Contact;
        Contact = Backbone.Model.extend({
            defaults: {
                firstName: '',
                lastName: ''
            }
        });

        return Contact;
    });
});