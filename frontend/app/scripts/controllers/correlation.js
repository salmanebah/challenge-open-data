'use strict';

/**
 * @ngdoc function
 * @name challengeOpenDataApp.controller:CorrelationCtrl
 * @description
 * # CorrelationCtrl
 * Controller of the challengeOpenDataApp
 */

angular.module('challengeOpenDataApp')
    .controller('CorrelationCtrl', function (CorrelationService, $timeout) {
	var drawer = CorrelationService.drawChart;
	var data = CorrelationService.getDataByCriteria("2004",
							"GDP",
							"crime",
							"unemployment");
	drawer(data);
	$timeout(function() {
	    var data = CorrelationService.getDataByCriteria("2004",
							    "crime",
							    "unemployment",
							    "GDP");
            drawer(data);
	}, 3000);
    });




