describe('airport',function() {
  var airport;

  beforeEach(function() {
    airport = new airport();
  });

  it('can instruct a plane to land', function() {
    expect(airport.landPlane).toBeTrue;
  });
});
