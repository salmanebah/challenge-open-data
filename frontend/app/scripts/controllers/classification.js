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
    var criteria = {
      'crime': 0,
      'education': 0,
      'employment': 0,
      'gdp': 0,
      'population': 0
    };
    var clusters = [];
    var clusters2015 = [];
    var colors = ['black', 'yellow', 'green', 'brown', 'red', 'pink'];

    function init() {
      angular.extend($scope, {
        defaults: {
          scrollWheelZoom: true,
          tileLayer: 'http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png'
        },
        maxbounds: maxbounds,
        france: france,
        criteria: criteria,
        clusters: clusters,
        clusters2015 : clusters2015,
        colors: colors,
        geojson: {
          data: [],
          style: function (feature) {
            return $scope.getStyle(feature);
          }
        },
        geojson2015 : {
          data : []
        },
        year : 2006
      });

      $scope.layer = L.geoJson();
      $http.get('/maps/regions-2016-simplifie.json')
        .success(function (data) {
          $scope.geojson.data = data;
        });
      $http.get('/maps/regions-2015-simplifie.json')
        .success(function (data) {
          $scope.geojson2015.data = data;
        });


    }

    init();
    $scope.getStyle = function (feature) {
      return {
        fillColor: $scope.getColor(feature),
        weight: 1,
        opacity: 1,
        color: 'black',
        fillOpacity: 0.8
      };
    };

    var count = 0;
    $scope.updateColors = function () {
      var empty = {
        'crime': 0,
        'education': 0,
        'employment': 0,
        'gdp': 0,
        'population': 0
      };
      if ((count % 2 ) === 0) {
        console.log('red');
        $scope.geojson.style = {fillColor: 'red'};
      } else if ((count % 2) === 1) {
        $scope.geojson.style = {fillColor: 'blue'};
        console.log('blue');
      }
      count++;

      if (JSON.stringify(empty) !== JSON.stringify($scope.criteria)) {
        $http.post('/api/classification/' + $scope.year, $scope.criteria)
          .success(function (data) {
            $scope.clusters = data.clusters;
            $scope.geojson.style = function (feature) {
              return $scope.getStyle(feature);
            };
          });
      }
    };

// get the adequate color according to the cluster that contains the region
    $scope.getColor = function (feature) {
      var clusterId = $scope.getClusterId(feature.id);
      if (clusterId >= 0) {
        return $scope.colors[clusterId];
      }
      return 'white';
    };

// Get the cluster in which the region is
    $scope.getClusterId = function (featureId) {
      for (var i in $scope.clusters) {
        var cluster = $scope.clusters[i];
        if (cluster.hasOwnProperty('regions')) {
          for (var region in cluster.regions) {
            if (parseInt(cluster.regions[region].id) === parseInt(featureId)) {
              return i;
            }
          }
        }
      }
      return -1;
    };
    $scope.$watch('criteria', function () {
      console.log('criteria has changed');
      console.log(criteria);
    }, true);
    $scope.$watch('year', function () {
      console.log('year has changed');
      console.log(year);
    }, true);
    /*
     function mouseOverHandler(event) {
     console.log(event.type);
     }

     function mouseOutHandler(event) {
     console.log(event.type);

     }

     function clickHandler(event) {
     console.log(event.type);
     }*/
  }]);

