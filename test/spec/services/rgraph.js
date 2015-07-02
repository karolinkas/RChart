'use strict';

describe('Service: RGraph', function () {

  // load the service's module
  beforeEach(module('rgraphApp'));

  // instantiate service
  var RGraph;
  beforeEach(inject(function (_RGraph_) {
    RGraph = _RGraph_;
  }));

  it('should do something', function () {
    expect(!!RGraph).toBe(true);
  });

});
