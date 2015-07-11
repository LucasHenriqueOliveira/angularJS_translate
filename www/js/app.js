// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'pascalprecht.translate'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $translateProvider) {
    $translateProvider.translations('en', {
        TITLE: "Hello",
        TEXT_NAME: "Enter your name"
    });
    $translateProvider.translations('es', {
        TITLE: "Hola",
        TEXT_NAME: "Introduzca su nombre"
    });
    $translateProvider.translations('pt', {
        TITLE: "Olá",
        TEXT_NAME: "Digite o seu nome"
    });
    $translateProvider.preferredLanguage("en");
})

.controller('MainCtrl', function($scope, $translate) {

    $scope.ChangeLanguage = function(lang){
        $translate.use(lang);
    }

});
