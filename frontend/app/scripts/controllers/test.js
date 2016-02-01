'use strict';

/**
 * @ngdoc function
 * @name challengeOpenDataApp.controller:TestCtrl
 * @description
 * # TestCtrl
 * Controller of the challengeOpenDataApp
 */

angular.module('challengeOpenDataApp')
  .controller('TestCtrl', ['$scope', function ($scope) {
    var london = {
      lat: 51.505,
        lng: -0.09,
        zoom: 8
    };
    var maxBoundsLondon = {
      northEast: {
        lat: 51.51280224425956,
          lng: -0.11681556701660155
      },
      southWest: {
        lat: 51.50211782162702,
          lng: -0.14428138732910156
      }};

    angular.extend($scope, {
      center : london,
      maxbounds : maxBoundsLondon,
      defaults: {
        tileLayer: 'http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png',
        zoomControlPosition: 'topright',
        tileLayerOptions: {
          opacity: 0.9,
          detectRetina: true,
          reuseTiles: true
        },
        scrollWheelZoom: false
      }
    });
  }]);
