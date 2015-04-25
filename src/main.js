require.config({
    baseUrl: 'assets/js',
    paths: {
       'jquery': 'vendor/jquery/jquery',
       'underscore': 'vendor/underscore/underscore',
       'backbone': 'vendor/backbone/backbone',
       'backbone.wreqr': 'vendor/backbone.wreqr/backbone.wreqr',
       'backbone.babysitter': 'vendor/backbone.babysitter/backbone.babysitter',
       'marionette': 'vendor/backbone.marionette/backbone.marionette',
    }
});

require([
    'app'
], function (
    App
) {
    window.app = App;
    App.start();
});