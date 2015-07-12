'use strict';

describe('Controller: MainCtrl', function () {

  beforeEach(module('rgraphApp'));

  var MainCtrl,
    scope, httpBackend;

  beforeEach(inject(function ($controller, $rootScope, $httpBackend) {
    scope = $rootScope.$new();
    httpBackend = $httpBackend;
    httpBackend.when('GET', '/files/Sample_data.json').respond({
                                                                  'Deposit 5k.Block 132': {
                                                                    'Power Cost': [
                                                                      {
                                                                        'time': '2015-02-01T00:00:00.000Z',
                                                                        'value': 0
                                                                      },
                                                                      {
                                                                        'time': '2015-02-02T00:00:00.000Z',
                                                                        'value': 0
                                                                      }
                                                                    ]
                                                                  }
                                                                }

      );
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
    httpBackend.flush();
  }));

  it('should attach an url to the scope', function () {
    expect(scope.url).toBe('/files/Sample_data.json');
  });

  it('check if data is on controller scopes', function() {
    httpBackend.expectGET(scope.url);
    expect(scope.data).toEqual({ title: 'Deposit 5k.Block 132', time: [ 'Feb,01', 'Feb,02' ], value: [ 0, 0 ] });
   
  });
});