'use strict';

angular.module('taskApp', [
  'ngRoute',
  'ngAnimate'
])
  .run(['$rootScope', function($rootScope) {
    $rootScope.apiUrl = '//127.0.0.1:8881/';
  }])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
