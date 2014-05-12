'use strict';

angular.module('taskApp')
  .controller('MainCtrl', ['$scope', 'callApi', function ($scope, callApi) {
    
    $scope.names = [
      {
        fname: 'Leopold',
        sname: 'Tyrmand'
      },
      {
        fname: 'Tadeusz',
        sname: 'Konwicki'
      },
      {
        fname: 'Wisława',
        sname: 'Szymborska'
      },
      {
        fname: 'Stanisław',
        sname: 'Lem'
      },
      {
        fname: 'Jarosław',
        sname: 'Iwaszkiewicz'
      }
    ];
    
    $scope.showResponse = false;
    $scope.apiResponse = [];
    
    $scope.sendNames = function() {
      $scope.showResponse = false;
      var sendArray = [];
      $scope.names.forEach(function (item) {
        if (item.checked === true) {
          sendArray.push(item);
        }
      });
      if (sendArray.length > 0) {
        callApi.postNames(sendArray).then(function (result) {
          $scope.apiResponse = result.data.resArr;
          $scope.showResponse = true;
        });
      }
        
    };
    
  }]);