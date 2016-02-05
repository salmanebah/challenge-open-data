'use strict';

/**
 * @ngdoc function
 * @name challengeOpenDataApp.controller:CorrelationCtrl
 * @description
 * # CorrelationCtrl
 * Controller of the challengeOpenDataApp
 */

angular.module('challengeOpenDataApp')
  .controller('CorrelationCtrl', function ($scope, $timeout, CorrelationService, $http) {
    var criterion = [
      {name: "crime", index: 0},
      {name: "unemployment", index: 1},
      {name: "diploma", index: 2},
      {name: "gdp", index: 3},
      {name: "0 à 19 ans", index: 4},
      {name: "20 à 39 ans", index: 5},
      {name: "40 à 59 ans", index: 6},
      {name: "60 à 74 ans", index: 7},
      {name: "75 ans et plus", index: 8}
    ];

    $scope.year = "2004";
    $scope.years = [2004];
    var drawer = CorrelationService.drawChart;


    $http.get('/data/years.json')
      .success(function (data) {
        $scope.yearsData = data;
      });

    var getYears = function () {
      var criteria = {
        'crime': 0,
        'age': 0,
        'diploma': 0,
        'gdp': 0,
        'unemployment': 0
      };

      if (($scope.currentCriterion[0].name === "0 à 19 ans") ||
        ($scope.currentCriterion[0].name === "20 à 39 ans") ||
        ($scope.currentCriterion[0].name === "40 à 59 ans") ||
        ($scope.currentCriterion[0].name === "60 à 74 ans") ||
        ($scope.currentCriterion[0].name === "75 ans et plus")) {
        criteria['age'] = 1;
      } else {
        criteria[$scope.currentCriterion[0].name] = 1;
      }
      if (($scope.currentCriterion[1].name === "0 à 19 ans") ||
        ($scope.currentCriterion[1].name === "20 à 39 ans") ||
        ($scope.currentCriterion[1].name === "40 à 59 ans") ||
        ($scope.currentCriterion[1].name === "60 à 74 ans") ||
        ($scope.currentCriterion[1].name === "75 ans et plus")) {
        criteria['age'] = 1;
      } else {
        criteria[$scope.currentCriterion[1].name] = 1;
      }
      if (($scope.currentCriterion[2].name === "0 à 19 ans") ||
        ($scope.currentCriterion[2].name === "20 à 39 ans") ||
        ($scope.currentCriterion[2].name === "40 à 59 ans") ||
        ($scope.currentCriterion[2].name === "60 à 74 ans") ||
        ($scope.currentCriterion[2].name === "75 ans et plus")) {
        criteria['age'] = 1;
      } else {
        criteria[$scope.currentCriterion[2].name] = 1;
      }


      for (var i in $scope.yearsData) {
        if (JSON.stringify(criteria) === JSON.stringify($scope.yearsData[i].criteria)) {
          console.log($scope.yearsData[i].years);
          return $scope.yearsData[i].years;
        }
      }
    };

    var getIndex = function (currentIndex, shift) {
      var len = criterion.length;
      return (((currentIndex + shift) + len) % len);
    };

    $scope.currentCriterion = [criterion[0], criterion[0], criterion[0]];

    $scope.next = function (pos) {
      var i = getIndex($scope.currentCriterion[pos].index, 1);
      $scope.currentCriterion[pos] = criterion[i];
      $scope.years = getYears();
      $scope.year = $scope.years[0];
      updateDraw();
    };
    $scope.previous = function (pos) {
      var i = getIndex($scope.currentCriterion[pos].index, -1);
      $scope.currentCriterion[pos] = criterion[i];
      $scope.years = getYears();
      $scope.year = $scope.years[0];
      updateDraw();
    };

    var updateDraw = function () {
      var data = CorrelationService.getDataByCriteria($scope.year,
        $scope.currentCriterion[0].name, $scope.currentCriterion[1].name, $scope.currentCriterion[2].name);
      drawer(data);
    };
    $scope.$watch('year', function () {
      updateDraw();
    });

  });




