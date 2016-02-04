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
      {name: "age", index: 4}
    ];

    $scope.year = {};
    $scope.years = [];
    var drawer = CorrelationService.drawChart;


    $http.get('/data/years.json')
      .success(function (data) {
        $scope.yearsData = data;
      });

    var getYears = function () {
      var criteria = {
        "crime": false,
        "unemployment": false,
        "gdp": false,
        "age": false,
        "diploma": false
      };
      criteria[$scope.currentCriterion[0].name] = true;
      criteria[$scope.currentCriterion[1].name] = true;
      criteria[$scope.currentCriterion[2].name] = true;
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
      updateDraw();
    };
    $scope.previous = function (pos) {
      var i = getIndex($scope.currentCriterion[pos].index, -1);
      $scope.currentCriterion[pos] = criterion[i];
      $scope.years = getYears();
      updateDraw();
    };

    var updateDraw2 = function () {
      var data = CorrelationService.getDataByCriteria("2004",
        $scope.currentCriterion[0].name, $scope.currentCriterion[0].name, $scope.currentCriterion[0].name);
      drawer(data);
    };
    var updateDraw = function () {
      var data = CorrelationService.getDataByCriteria("2004",
        "crime",
        "GDP",
        "unemployment");
      drawer(data);
    };
    updateDraw2();

  });




