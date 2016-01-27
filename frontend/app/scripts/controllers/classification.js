'use strict';

/**
 * @ngdoc function
 * @name challengeOpenDataApp.controller:ClassificationCtrl
 * @description
 * # ClassificationCtrl
 * Controller of the challengeOpenDataApp
 */
angular.module('challengeOpenDataApp')
    .controller('ClassificationCtrl', function ($scope, ClassificationService) {
	$scope.hello = ClassificationService.getHello();
  });
