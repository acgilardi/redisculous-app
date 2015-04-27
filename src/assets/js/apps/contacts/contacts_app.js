define(['app'], function(App) {

    App.module('ContactsApp', function(ContactsApp, App, Backbone, Marionette, $, _) {
        ContactsApp.Router = Marionette.AppRouter.extend({
            appRoutes: {
                'contacts': 'listContacts'
            }
        });

        var API = {
            listContacts: function(criterion) {
                require(['apps/contacts/list/list_controller'], function(ListController) {
                   ListController.listContacts(criterion);
                });
            }
        };

        App.on('contacts:list', function() {
            App.navigate('contacts');
            API.listContacts();
        });

        App.addInitializer(function() {
            new ContactsApp.Router({
                controller: API
            });
        });
    });

    return App.ContactsApp;
});