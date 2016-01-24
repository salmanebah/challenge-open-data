'use strict';

var classificationModule = angular.module('classificationModule');

classificationModule.factory('ClassificationService', function() {
    var classificationService = {};
    classificationService.getHello = function() {
	return 'hello';
    };

    return classificationService;
    
});
