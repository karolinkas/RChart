'use strict';

describe('Service: loadData', function () {

  beforeEach(module('rgraphApp'));

  // instantiate service
  var loadData;
  beforeEach(inject(function (_loadData_) {
    loadData = _loadData_;
  }));

  // check if instance exists
  it('should instantiate Object', function () {
    expect(!!loadData).toBe(true);
  });

});