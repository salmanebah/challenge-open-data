'use strict';

var classificationModule = angular.module('classificationModule', ['nemLogging', 'ui-leaflet']);

classificationModule.controller('ClassificationController', function($scope, ClassificationService) {
    $scope.hello = ClassificationService.getHello();
    
});
