'use strict';

const angular = require('angular');

angular.module('imgApp')
  .controller('LandingController', ['$rootScope', LandingController]);

function LandingController($rootScope) {
  let lc = this;
  lc.images = $rootScope.imageData;
}
