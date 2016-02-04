'use strict';

describe('Service: correlationData', function () {

  // load the service's module
  beforeEach(module('challengeOpenDataApp'));

  // instantiate service
  var correlationData;
  beforeEach(inject(function (_correlationData_) {
    correlationData = _correlationData_;
  }));

  it('should do something', function () {
    expect(!!correlationData).toBe(true);
  });

});
