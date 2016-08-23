'use strict';

const angular = require('angular');

angular.module('imgApp')
  .controller('ErrorController', ['$rootScope', ErrorController]);

function ErrorController($rootScope) {
  let ec = this;
  ec.errorMessage = $rootScope.errorMessage;
}
