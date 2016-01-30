'use strict';

/**
 * @ngdoc function
 * @name challengeOpenDataApp.controller:ClassificationCtrl
 * @description
 * # ClassificationCtrl
 * Controller of the challengeOpenDataApp
 */

var centerMap = function($scope, leafletData) {
    leafletData.getMap().then(function(map) {
	leafletData.getGeoJSON().then(function(geojson) {
	    map.fitBounds(geojson.getBounds());
	    map.setZoom(6);
	    L.geoJson($scope.newRegions.data, {
		style: function(feature) {
		    switch (parseInt(feature.id) % 2) {
		    case 0: return {color: "#ff0000"};
		    default: return {color: "#0000ff"};
		    }
		}		
	    }).addTo(map);
	});
    });
};


angular.module('challengeOpenDataApp')
    .controller('ClassificationCtrl', function ($scope, ClassificationService, leafletData) {
	
	// Get the map and bind it to mapInfo
	ClassificationService.getMap().then(function(mapInfo) {
	    // Setup the map
	    $scope.newRegions = mapInfo.newRegions;
	    // Setup the default options
	    $scope.defaults = mapInfo.defaults;
	    // Center the map
	    centerMap($scope, leafletData);
	});
  });
