define([], function (

) {
    'use strict';

    app.module('Entities.Contact', function(Entities, app, Backbone, Marionette, $, _) {
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