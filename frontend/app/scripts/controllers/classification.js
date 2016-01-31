'use strict';

/**
 * @ngdoc function
 * @name challengeOpenDataApp.controller:ClassificationCtrl
 * @description
 * # ClassificationCtrl
 * Controller of the challengeOpenDataApp
 */

var centerMap = function ($scope, leafletData) {
  leafletData.getMap().then(function (map) {
    leafletData.getGeoJSON().then(function (geojson) {
      map.fitBounds(geojson.getBounds());
      map.setZoom(6);
    });
  });
};

angular.module('challengeOpenDataApp')
  .controller('ClassificationCtrl', function ($scope, ClassificationService, leafletData) {
    // Get the map and bind it to mapInfo
    ClassificationService.getMap().then(function (mapInfo) {
      angular.extend($scope, {
        // Setup the map
        newRegions: mapInfo.newRegions,
        // Setup the default options
        defaults: mapInfo.defaults,
        maxbounds : mapInfo.maxbounds
      });
      // Center the map
      centerMap($scope, leafletData);
    });

  });
