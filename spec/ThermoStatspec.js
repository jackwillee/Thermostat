describe('thermostat', function() {
  var thermostat;
  describe('when initializing', function() {
    it("initializes with 20 c", function() {
     var thermostat = new Thermostat()
    expect(thermostat.getTemp()).toEqual(20)


   })
  })
  describe('checking temperature can increase', function() {
    it('checking temperature can increase by 1', function() {
      var thermostat = new Thermostat()
      thermostat.increaseTemp()
      expect(thermostat.getTemp()).toEqual(21)

    })
  })
  describe('checking temperature can decrease', function() {
    it('checking temperature can decrease by 1', function(){
      var thermostat = new Thermostat()
      thermostat.decreaseTemp()
      expect(thermostat.getTemp()).toEqual(19)
    })
  })
  describe('checks the min temp is set to 10', function(){
    it('has a minimum of 10 degrees', function() {
      var thermostat = new Thermostat
      thermostat.decreaseTemp
      for (var i = 0; i < 11; i++) {
        thermostat.decreaseTemp();
      }
      expect(thermostat.getTemp()).toEqual(10);
    });
  })
  describe('checks whether power saving mode is on by default', function() {
    it('checks power saving mode works', function(){
      var thermostat = new Thermostat
      expect(thermostat.isPowerSavingModeOn()).toBe(true)

    })
  })
})
