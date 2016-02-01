'use strict';

/**
 * @ngdoc function
 * @name challengeOpenDataApp.controller:ClassificationCtrl
 * @description
 * # ClassificationCtrl
 * Controller of the challengeOpenDataApp
 */





angular.module('challengeOpenDataApp')
  .controller('ClassificationCtrl', ['$scope', '$http', 'leafletData', function ($scope, $http) {

    var maxbounds = {
      northEast: {
        lat: 50,
        lng: 7
      },
      southWest: {
        lat: 43,
        lng: -3
      }
    };
    var france = {
      lat: 46,
      lng: -2,
      zoom: 6
    };

    angular.extend($scope, {
      defaults: {
        scrollWheelZoom: true
      },
      maxbounds: maxbounds,
      france: france
    });

    $http.get('/maps/regions-2016-simplifie.json')
      .success(function (data) {
        angular.extend($scope, {
          geoson: {
            data: data,
            style: {
              fillColor: 'green',
              weight: 2,
              opacity: 1,
              color: 'white',
              fillOpacity: 0.7
            }
          }
        });
      });
    var clusters = [];
    var colors = ['#edf8fb', '#b2e2e2', '#66c2a4', '#2ca25f', '#006d2c'];
    $http.get('/stubs/cluster.json')
      .success(function (data) {
        clusters = data.clusters;
      });

    function style(feature) {
      return {
        fillColor: getColor(feature),
        weight: 2,
        opacity: 1,
        color: 'black',
        dashArray: '1',
        fillOpacity: 0.7
      };
    }

    $scope.updateColors = function () {
      $scope.geoson.style = style;
    };

    // get the adequate color according to the cluster that contains the region
    function getColor(feature) {
      var clusterId = getClusterId(feature.id);
      if (clusterId >= 0) {
        return colors[clusterId];
      }
      return 'white';
    }

    // Get the cluster in which the region is
    function getClusterId(featureId) {
      for (var i in clusters) {
        var cluster = clusters[i];
        if (cluster.hasOwnProperty('regions')) {
          for (var region in cluster.regions) {
            if (parseInt(cluster.regions[region].id) === parseInt(featureId)) {
              return i;
            }
          }
        }
      }
      return -1;
    }

    function regionClick(region, event) {
      $scope.regionClicked = region;
      console.log(event);
    }
    $scope.$on("leafletDirectiveGeoJson.myMap.click", function (ev, leafletPayload) {
      regionClick(leafletPayload.leafletObject.feature, leafletPayload.leafletEvent);
    });

    function regionMouseOver(region, event) {
      var layer = event.target;
      layer.setStyle({
        weight: 2
      });
      layer.bringToFront();
      console.log(region);
    }

    $scope.$on("leafletDirectiveGeoJson.myMap.mouseover", function(ev, leafletPayload) {
      regionMouseOver(leafletPayload.leafletObject.feature, leafletPayload.leafletEvent);
    });
  }
  ]);
