'use strict';

/**
 * @ngdoc overview
 * @name challengeOpenDataApp
 * @description
 * # challengeOpenDataApp
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
	'classificationModule'
	
    ])
    .config(function ($routeProvider) {
	$routeProvider

	    .when('/classification', {
		templateUrl: 'views/classification.html',
		controller: 'ClassificationController',
		controllerAs: 'classification'
	    })

	    .otherwise({
		redirectTo: '/classification'
	    });
    });
