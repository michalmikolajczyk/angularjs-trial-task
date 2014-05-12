'use strict';

describe('Service: callApi', function () {

  // load the service's module
  beforeEach(module('taskApp'));

  // instantiate service
  var callApi, $rootScope, $httpBackend;
  beforeEach(inject(function (_callApi_, _$httpBackend_, _$rootScope_) {
    $rootScope = _$rootScope_;
    callApi = _callApi_;
    $httpBackend = _$httpBackend_;
  }));

  it('should do something', function () {
    expect(!!callApi).toBe(true);
  });
  
  it('should send an http post and get correct response', function () {
    
    var data = [
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
    
    $httpBackend.expectPOST($rootScope.apiUrl, [data[0]]).respond(
      [{
        fname: data[0].sname,
        sname: data[0].fname
      }]
    );
    callApi.postNames([data[0]]).then(function (result) {
      expect(result.data).toEqual(
        [{
          fname: data[0].sname,
          sname: data[0].fname
        }]
      );
    });
    $httpBackend.flush();
    
  });

});
