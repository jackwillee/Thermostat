"use strict";
function Thermostat() {
this.temperature = 20; 
this.MIN_TEMP = 10;
this.MAX_TEMP = 25;
this.powerSavingMode = true;
}

Thermostat.prototype.getTemp = function() {
  return this.temperature
}

Thermostat.prototype.increaseTemp = function() {
  return  this.temperature +=1
}


Thermostat.prototype.decreaseTemp = function() {
  if (this.isMinTemp()) {
    return;
  }
  this.temperature -= 1;   
}
Thermostat.prototype.isMinTemp = function() {   
  return this.temperature === this.MIN_TEMP;
}
Thermostat.prototype.isPowerSavingModeOn = function() {
  return this.powerSavingMode === true  
}