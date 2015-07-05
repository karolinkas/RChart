'use strict';

describe('Controller: MainCtrl', function () {

  beforeEach(module('rgraphApp'));

  var MainCtrl,
    scope;

  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach an url to the scope', function () {
    expect(scope.url).toBe('/files/Sample_data.json');
  });
});