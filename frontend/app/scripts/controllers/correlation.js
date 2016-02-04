'use strict';

/**
 * @ngdoc function
 * @name challengeOpenDataApp.controller:CorrelationCtrl
 * @description
 * # CorrelationCtrl
 * Controller of the challengeOpenDataApp
 */

// var mock = [
//     {
// 	criteria:
// 	{ crime : true, unemployment: true, age: true, diploma: false, GDP: false},
// 	year: [2000, 2001]		
//     }
// ];

angular.module('challengeOpenDataApp')
    .controller('CorrelationCtrl', function ($scope,  $timeout, CorrelationService) {
	var criterion = [
	    { name: "crime", index: 0},
	    { name: "unemployment", index: 1},
	    { name: "diploma", index: 2},
	    { name: "GDP", index: 3},
	    { name: "age", index: 4},
	];

	var getIndex = function(currentIndex, shift) {
	    var len = criterion.length;
	    return (((currentIndex + shift) + len) % len);
	};

	$scope.currentCriterion = [criterion[0], criterion[0], criterion[0]];

	$scope.next = function(pos) {
	    var i = getIndex($scope.currentCriterion[pos].index, 1);
	    $scope.currentCriterion[pos] = criterion[i];
	    //TODO: Update year here
	};

	$scope.previous = function(pos) {
	    var i = getIndex($scope.currentCriterion[pos].index, -1);
	    $scope.currentCriterion[pos] = criterion[i];
	    //TODO: Update year here
	};	

	var drawer = CorrelationService.drawChart;
	var data = CorrelationService.getDataByCriteria("2004",
							"crime",
							"GDP",
		
							"unemployment");
	drawer(data);
	$timeout(function() {
	    var data = CorrelationService.getDataByCriteria("2004",
							    "crime",
							    "unemployment",
							    "GDP");
            drawer(data);
	    $timeout(function() {
		var data = CorrelationService.getDataByCriteria("2006",
								"GDP",
								"unemployment",
							       	"crime");
		drawer(data);
		
		$timeout(function() {
		    var data = CorrelationService.getDataByCriteria("2004",
								    "0 à 19 ans",
								    "20 à 39 ans",
								    "75 ans et plus");
		    drawer(data);
		}, 3000);
	    }, 3000);
	}, 3000);




	
	
    });




