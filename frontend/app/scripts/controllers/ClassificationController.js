'use strict';

var classificationModule = angular.module('classificationModule', []);

classificationModule.controller('ClassificationController', function($scope, ClassificationService) {
    $scope.hello = ClassificationService.getHello();
    
});
