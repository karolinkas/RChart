'use strict';

describe('Service: loadData', function () {

  // load the service's module
  beforeEach(module('rgraphApp'));

  // instantiate service
  var loadData;
  beforeEach(inject(function (_loadData_) {
    loadData = _loadData_;
  }));

  it('should instantiate Object', function () {
    expect(!!loadData).toBe(true);
  });

});