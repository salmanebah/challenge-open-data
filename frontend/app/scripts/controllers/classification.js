'use strict';

/**
 * @ngdoc function
 * @name challengeOpenDataApp.controller:ClassificationCtrl
 * @description
 * # ClassificationCtrl
 * Controller of the challengeOpenDataApp
 */





angular.module('challengeOpenDataApp')
  .controller('ClassificationCtrl', ['$scope', '$http', function ($scope, $http) {

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
    var colors = [
      'black',
      '#01665e',
      '#8e0152',
      '#4d9221',
      '#40004b',
      '#92c5de',
      '#b2182b',
      '#053061'
    ];
    var criteria = {
      'crime': 0,
      'age': 0,
      'diploma': 0,
      'gdp': 0,
      'unemployment': 0
    };
    var getYears = function (criteria) {
      for (var i in $scope.yearsData) {
        if (JSON.stringify(criteria) === JSON.stringify($scope.yearsData[i].criteria)) {
          console.log($scope.yearsData[i].years);
          console.log($scope.yearsData[i].years);
          return $scope.yearsData[i].years;
        }
      }
    };

    function init() {
      $http.get('/data/years.json')
        .success(function (data) {
          $scope.yearsData = data;
        });
      angular.extend($scope, {
        defaults: {
          scrollWheelZoom: true,
          tileLayer: 'http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png'
        },
        maxbounds: maxbounds,
        france: france,
        criteria: criteria,
        clusters: [],
        clusters2015: [],
        colors: colors,
        geojson: {
          data: [],
          style: function (feature) {
            return $scope.getStyle(feature, $scope.clusters);
          }
        },
        geojson2015: {
          data: [],
          style: function (feature) {
            return $scope.getStyle(feature, $scope.clusters2015);
          }
        },
        year: 2006,
        years: getYears(criteria),
        score: 0,
        score2015: 0,
        legend: {
          position: 'bottomleft',
          colors: ['#ff0000', '#28c9ff', '#0000ff', '#ecf386'],
          labels: ['National Cycle Route', 'Regional Cycle Route', 'Local Cycle Network', 'Cycleway']
        },
        legend2015: {
          position: 'bottomleft',
          colors: ['#ff0000', '#28c9ff', '#0000ff', '#ecf386'],
          labels: ['National Cycle Route', 'Regional Cycle Route', 'Local Cycle Network', 'Cycleway']
        }
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
    $scope.getStyle = function (feature, clusters) {
      return {
        fillColor: $scope.getColor(feature.properties.code, clusters),
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
        'age': 0,
        'diploma': 0,
        'gdp': 0,
        'unemployment': 0
      };
      if ((count % 2 ) === 0) {
        console.log('red');
        $scope.geojson.style = {fillColor: 'red'};
        $scope.geojson2015.style = {fillColor: 'red'};
      } else if ((count % 2) === 1) {
        $scope.geojson.style = {fillColor: 'blue'};
        $scope.geojson2015.style = {fillColor: 'blue'};
        console.log('blue');
      }
      count++;

      if (JSON.stringify(empty) !== JSON.stringify($scope.criteria)) {
        $http.post('/api/classification/' + $scope.year, $scope.criteria)
          .success(function (data) {
            $scope.clusters = data.newClassification.clusters;
            $scope.score = data.newClassification.score;
            $scope.clusters2015 = data.oldClassification.clusters;
            $scope.score2015 = data.oldClassification.score;

            $scope.geojson.style = function (feature) {
              return $scope.getStyle(feature, $scope.clusters);
            };
            $scope.geojson2015.style = function (feature) {
              return $scope.getStyle(feature, $scope.clusters2015);
            };
          });
      }
    };

// get the adequate color according to the cluster that contains the region
    $scope.getColor = function (featureId, clusters) {
      var clusterId = $scope.getClusterId(featureId, clusters);
      if (clusterId >= 0) {
        return $scope.colors[clusterId];
      }
      return 'white';
    };

// Get the cluster in which the region is
    $scope.getClusterId = function (featureId, clusters) {
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
    };
    $scope.$watch('criteria', function () {
      console.log('criteria has changed');
      $scope.years = getYears(criteria)
    }, true);
    $scope.$watch('year', function () {
      console.log('year has changed');
      console.log($scope.year);
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

