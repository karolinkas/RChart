'use strict';

describe('Service: loadData', function () {

  // load the service's module
  beforeEach(module('rgraphApp'));

  // instantiate service
  var LoadData;
  beforeEach(inject(function (_LoadData_) {
    LoadData = _LoadData_;
  }));

  it('should do something', function () {
    expect(!!LoadData).toBe(true);
  });

});
