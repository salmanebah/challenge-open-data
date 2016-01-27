'use strict';

/**
 * @ngdoc service
 * @name challengeOpenDataApp.classification
 * @description
 * # classification
 * Service in the challengeOpenDataApp.
 */
angular.module('challengeOpenDataApp')
  .service('ClassificationService', function () {
      
      var helloService = {};
      helloService.getHello = function() {
	  return 'Hello world';
      };

      return helloService;
  });
