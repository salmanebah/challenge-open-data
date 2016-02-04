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
      {name: "GDP", index: 3},
      {name: "age", index: 4}
    ];


    $http.get('/data/years.json')
      .success(function (data) {
        $scope.yearsData = data;
      });

    $scope.year = {};
    $scope.years = [];
    var getYears = function () {
      var a = $scope.currentCriterion[0].name;
      var b = $scope.currentCriterion[1].name;
      var c = $scope.currentCriterion[2].name;
      for (var i in $scope.yearsData) {
        var yearsData = $scope.yearsData[i];
        if ((yearsData[a] === true) && (yearsData[b] === true) && (yearsData[c] === true)) {
          return yearsData.years;
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
    };

    $scope.previous = function (pos) {
      var i = getIndex($scope.currentCriterion[pos].index, -1);
      $scope.currentCriterion[pos] = criterion[i];
      $scope.years = getYears();
    };



    var drawer = CorrelationService.drawChart;
    var data = CorrelationService.getDataByCriteria("2004",
      "crime",
      "GDP",
      "unemployment");
    drawer(data);
    $timeout(function () {
      var data = CorrelationService.getDataByCriteria("2004",
        "crime",
        "unemployment",
        "GDP");
      drawer(data);
      $timeout(function () {
        var data = CorrelationService.getDataByCriteria("2006",
          "GDP",
          "unemployment",
          "crime");
        drawer(data);

        $timeout(function () {
          var data = CorrelationService.getDataByCriteria("2004",
            "0 à 19 ans",
            "20 à 39 ans",
            "75 ans et plus");
          drawer(data);
        }, 3000);
      }, 3000);
    }, 3000);
  });




