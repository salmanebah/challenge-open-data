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
							"crime",
							"GDP",
							"unemployment");
	drawer(data);
	$timeout(function() {
	    var data = CorrelationService.getDataByCriteria("2004",
							    "unemployment",
							    "crime",
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
								    "unemployment",
								    "crime",
								    "GDP");
		    drawer(data);
		}, 3000);
	    }, 3000);
	}, 3000);




	
	
    });




