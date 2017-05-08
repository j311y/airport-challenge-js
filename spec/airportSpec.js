describe('Airport',function() {
  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = "plane";
  });

  it('can instruct a plane to land', function() {
    airport.land(plane);
    expect(airport.hasPlane).toBe(true);
  });
});
