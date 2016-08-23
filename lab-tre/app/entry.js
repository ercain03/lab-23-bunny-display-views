'use strict';

require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

const angular = require('angular');
const angular_route = require('angular-route');

const rootData = require('./data/root_data.js');
const routes = require('./routes/route.js');

angular.module('imgApp', [angular_route]);
angular.module('imgApp').run(['$rootScope', rootData]);
angular.module('imgApp').config(routes);

require('./view/home');
require('./view/landing');
require('./view/fullsize');
require('./view/error');
