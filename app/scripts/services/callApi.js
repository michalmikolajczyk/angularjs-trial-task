'use strict';

angular.module('taskApp')
  .factory('callApi', ['$http', '$rootScope', function ($http, $rootScope) {
    // Service logic
    // ...
    
    var postNames = function(data) {
      return $http.post($rootScope.apiUrl, JSON.stringify(data));
    };

    var meaningOfLife = 42;

    // Public API here
    return {
      postNames: function (data) {
        return postNames(data);
      },
      someMethod: function () {
        return meaningOfLife;
      }
    };
  }]);
