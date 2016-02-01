'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('challengeOpenDataApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui-leaflet',
    'nemLogging',
    'ui.materialize'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/classification', {
        templateUrl: 'views/classification.html',
        controller: 'ClassificationCtrl'
      })
      .otherwise({
        redirectTo: '/classification'
      });
  });
