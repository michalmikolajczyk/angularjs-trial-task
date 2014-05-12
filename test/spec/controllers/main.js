'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('taskApp'));

  var MainCtrl,
    scope,
    callApi,
    deferred;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $q) {
    callApi = {
      postNames: function (args) {
        deferred = $q.defer();
        deferred.resolve('newValue');
        return deferred.promise;
      }
    };
    spyOn(callApi, 'postNames').andCallThrough();
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope,
      callApi: callApi
    });
  }));

  it('should attach a list of names and surnames to the scope', function () {
    expect(scope.names.length).toBe(5);
  });
  
  it('should call the service when the button is clicked', function () {
    scope.names = [
      {
        fname: 'test',
        sname: 'stest',
        checked: true
      }
    ];
    
    scope.sendNames();
    expect(callApi.postNames).toHaveBeenCalled();
  });
  
  it('should call the service with only the checked items', function () {
    scope.names = [
      {
        fname: 'test',
        sname: 'stest',
        checked: true
      },
      {
        fname: 'test2',
        sname: 'stest2',
        checked: false
      }
    ];

    scope.sendNames();
    
    expect(callApi.postNames.mostRecentCall.args[0].length).toEqual(1);
  });
  
  it('should not call the service when no names are checked', function () {
    scope.names = [
      {
        fname: 'test',
        sname: 'stest',
        checked: false
      },
      {
        fname: 'test2',
        sname: 'stest2',
        checked: false
      }
    ];
    scope.sendNames();
    expect(callApi.postNames).not.toHaveBeenCalled();
    
  });
  
  it('should get a promise back from the service', function () {
    var result;
    callApi.postNames().then(function (promiseResolve) {
      result = promiseResolve;
    });
    scope.$apply();    
    expect(result).toBe('newValue');  
  });
  
});