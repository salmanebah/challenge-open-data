'use strict';

/**
 * @ngdoc function
 * @name challengeOpenDataApp.controller:CorrelationCtrl
 * @description
 * # CorrelationCtrl
 * Controller of the challengeOpenDataApp
 */

var stubs1 = 
	[
	    {
		xCriterion : {name: "Chommage", value: 120},
		yCriterion: {name: "Emploi", value: 50},
		sizeCriterion: {name: "Age", value: 50},
		region: {id : 1, name: "Rhône-alpes"}
	    },

	    {
		xCriterion : {name: "Chommage", value: 200},
		yCriterion: {name: "Emploi", value: 70},
		sizeCriterion: {name: "Age", value: 20},
		region: {id : 2, name: "Aquitaine"}
	    },

	    {
		xCriterion : {name: "Chommage", value: 245},
		yCriterion: {name: "Emploi", value: 100},
		sizeCriterion: {name: "Age", value: 67},
		region: {id : 3, name: "Normandie"}
	    },
	    
	];

var stubs2 = 
	[
	    {
		xCriterion : {name: "Age", value: 140},
		yCriterion: {name: "Crime", value: 60},
		sizeCriterion: {name: "Age", value: 20},
		region: {id : 1, name: "Rhône-alpes"}
	    },

	    {
		xCriterion : {name: "Age", value: 300},
		yCriterion: {name: "Crime", value: 24},
		sizeCriterion: {name: "Age", value: 56},
		region: {id : 2, name: "Aquitaine"}
	    },

	    {
		xCriterion : {name: "Age", value: 67},
		yCriterion: {name: "Emploi", value: 120},
		sizeCriterion: {name: "Age", value: 56},
		region: {id : 3, name: "Normandie"}
	    },
	    
	];


angular.module('challengeOpenDataApp')
    .controller('CorrelationCtrl', function (CorrelationService, $timeout) {
	var drawer = CorrelationService.drawChart;
	drawer(stubs1);
	 $timeout(function() {
             drawer(stubs2);
       }, 3000);

	
    });




