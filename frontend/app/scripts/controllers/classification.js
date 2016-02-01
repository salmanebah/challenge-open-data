'use strict';

/**
 * @ngdoc function
 * @name challengeOpenDataApp.controller:ClassificationCtrl
 * @description
 * # ClassificationCtrl
 * Controller of the challengeOpenDataApp
 */

angular.module('challengeOpenDataApp')
    .controller('ClassificationCtrl', function ($scope, ClassificationService) {
	
	// Get the map and bind it to mapInfo
	ClassificationService.getMap().then(function(mapInfo) {
	    // Setup the map
	    $scope.newRegions = mapInfo.newRegions;
	    // Setup the default options
	    $scope.defaults = mapInfo.defaults;
	    // Auto discover the center
	});
  });
