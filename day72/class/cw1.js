const thermometer = {
  _celsius: 20,

  get fahrenheit() {
    return this._celsius * 1.8 + 32;
  },

  set fahrenheit(newFahrenheit) {
    this._celsius = (newFahrenheit - 32) / 1.8;
  }
};

console.log(thermometer.fahrenheit); 

thermometer.fahrenheit = 86;

console.log(thermometer._celsius); 