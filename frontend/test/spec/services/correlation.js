'use strict';

describe('Service: correlation', function () {

  // load the service's module
  beforeEach(module('challengeOpenDataApp'));

  // instantiate service
  var correlation;
  beforeEach(inject(function (_correlation_) {
    correlation = _correlation_;
  }));

  it('should do something', function () {
    expect(!!correlation).toBe(true);
  });

});
