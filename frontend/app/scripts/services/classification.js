'use strict';

/**
 * @ngdoc service
 * @name challengeOpenDataApp.classification
 * @description
 * # classification
 * Service in the challengeOpenDataApp.
 */

angular.module('challengeOpenDataApp')
  .service('ClassificationService', function ($http, $log) {

    var classificationService = {};
    var newRegionsGeoJson = {
      style: {
        fillColor: 'green',
        weight: 2,
        opacity: 1,
        color: 'white',
        fillOpacity: 0.7
      }
    };

    var defaults = {
      scrollWheelZoom: true
    };

    var mapInfo = {};
    mapInfo.newRegions = newRegionsGeoJson;
    mapInfo.defaults = defaults;
    mapInfo.maxbounds = {
      northEast: {
        lat: 50,
        lng: 7
      },
      southWest: {
        lat: 43,
        lng: -3
      }
    };


    classificationService.getMap = function () {
      //TODO: update with the actual file
      return $http.get('/maps/regions-2016-simplifie.json')
        .then(function (response) {
          $log.debug('Got the geojson map');
          // Update the data field of the geojson with the one read from the file
          mapInfo.newRegions.data = response.data;
          return mapInfo;
        });
    };

    return classificationService;
  });
