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
	// for next and previous 
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
	
	// Color for the different regions
	var colorArray = ["#1f77b4", "#e7ba52", "#2ca02c", "#8c564b",
			  "#bcbd22", "#8c6d31", "#990099", "#993333",
			  "#99cc00", "#cc3300", "#0099ff", "#ff9900",
			  "#00ff99"];
	// Map old regions id to color representing the new regions
	$scope.colorMap = {
	    11: colorArray[0],
	    24: colorArray[1],
	    26: colorArray[2], 43: colorArray[2],
	    23: colorArray[3], 25: colorArray[3],
	    31: colorArray[4], 22: colorArray[4],
	    41: colorArray[5], 42: colorArray[5], 21: colorArray[5],
	    52: colorArray[6],
	    53: colorArray[7],
	    72: colorArray[8], 54: colorArray[8], 74: colorArray[8],
	    73: colorArray[9], 91: colorArray[9],
	    82: colorArray[10], 83: colorArray[10],
	    93: colorArray[11],
	    94: colorArray[12]
	};
	// By default set the year to search for to 2004
	$scope.year = "2004";
	$scope.years = [2004];
	// Get the drawer from CorrelationService
	var drawer = CorrelationService.drawChart;

	// load valid year for all criteria
	$http.get('/data/years.json')
	    .success(function (data) {
		$scope.yearsData = data;
	    });

	/**
	 * @returns Valid years for the current criterion in $scope.currentCriterion
	 */
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
		criteria.age = 1;
	    } else {
		criteria[$scope.currentCriterion[0].name] = 1;
	    }
	    if (($scope.currentCriterion[1].name === "0 à 19 ans") ||
		($scope.currentCriterion[1].name === "20 à 39 ans") ||
		($scope.currentCriterion[1].name === "40 à 59 ans") ||
		($scope.currentCriterion[1].name === "60 à 74 ans") ||
		($scope.currentCriterion[1].name === "75 ans et plus")) {
		criteria.age = 1;
	    } else {
		criteria[$scope.currentCriterion[1].name] = 1;
	    }
	    if (($scope.currentCriterion[2].name === "0 à 19 ans") ||
		($scope.currentCriterion[2].name === "20 à 39 ans") ||
		($scope.currentCriterion[2].name === "40 à 59 ans") ||
		($scope.currentCriterion[2].name === "60 à 74 ans") ||
		($scope.currentCriterion[2].name === "75 ans et plus")) {
		criteria.age = 1;
	    } else {
		criteria[$scope.currentCriterion[2].name] = 1;
	    }


	    for (var i in $scope.yearsData) {
		if (JSON.stringify(criteria) === JSON.stringify($scope.yearsData[i].criteria)) {
		    console.log($scope.yearsData[i].years);
		    return $scope.yearsData[i].years;
		}
	    }
	    return [];
	};

	/**
	 * @param currentIndex The currentIndex in criterion
	 * @param shift The step 
	 * @returns The next valid index in criterion
	 */
	var getIndex = function (currentIndex, shift) {
	    var len = criterion.length;
	    return (((currentIndex + shift) + len) % len);
	};

	// By default x, y, z axis are set to the criterion[0] i.e crime
	$scope.currentCriterion = [criterion[0], criterion[0], criterion[0]];

	/**
	 * Get the next criterion and update the graph
	 * @param pos the position in criterion
	 */
	$scope.next = function (pos) {
	    // Get the next index
	    var i = getIndex($scope.currentCriterion[pos].index, 1);
	    // Get the criterion
	    $scope.currentCriterion[pos] = criterion[i];
	    // Get the valid year for currentCriterion
	    $scope.years = getYears();
	    // Update the view
	    $scope.year = $scope.years[0];
	    // Update the graph
	    updateDraw();
	};

	/**
	 * Get the previous criterion and update the graph
	 * @param pos the position in criterion
	 */
	$scope.previous = function (pos) {
	    // Get the previous index
	    var i = getIndex($scope.currentCriterion[pos].index, -1);
	    // Get the criterion
	    $scope.currentCriterion[pos] = criterion[i];
	    // Get the valid year for currentCriterion
	    $scope.years = getYears();
	    // Update the view
	    $scope.year = $scope.years[0];
	    // Update the graph
	    updateDraw();
	};

	/**
	 * Update the graph
	 */
	var updateDraw = function () {
	    var data = CorrelationService
		    .getDataByCriteria($scope.year,
				       $scope.currentCriterion[0].name,
				       $scope.currentCriterion[1].name,
				       $scope.currentCriterion[2].name);
	    drawer(data);
	};

	// Setup a watcher for year
	$scope.$watch('year', function () {
	    updateDraw();
	});

    });




