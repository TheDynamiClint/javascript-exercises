//convert temperatures from Fahrenheit to Celsius
const ftoc = function(n) {
  //[°C] = ([°F] − 32) × 5⁄9
  let celsius = ((n - 32) * 5) / 9;
  return (celsius.toPrecision(3) * 1000) / 1000;
  
  };
  
//convert temperatures from Celsius to Fahrenheit
const ctof = function(n) {
  //[°F] = [°C] × 9⁄5 + 32
  let farenheit = ((n * 9) / 5) + 32;
  return (farenheit.toPrecision(4) * 1000) / 1000;
  
  };

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
