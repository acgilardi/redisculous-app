require.config({
    baseUrl: 'assets/js',
    paths: {
       'jquery': 'vendor/jquery/jquery',
       'underscore': 'vendor/underscore/underscore',
       'backbone': 'vendor/backbone/backbone',
       'backbone.wreqr': 'vendor/backbone.wreqr/backbone.wreqr',
       'backbone.babysitter': 'vendor/backbone.babysitter/backbone.babysitter',
        'backbone.syphon': 'vendor/backbone.syphon/backbone.syphon',
       'localstorage': 'vendor/backbone.localstorage/backbone.localStorage',
       'marionette': 'vendor/backbone.marionette/backbone.marionette',
        'text': "vendor/text/text"
    },
    shim: {
        'underscore': {
            exports: '_'
        }
    }
});

require([
    'app',
    'apps/contacts/contacts_app_router'
], function (
    App
) {
    window.app = App;
    window.appBase = '/';
    App.start();
});
