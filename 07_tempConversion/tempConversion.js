const convertToCelsius = function(c) {
  let celsius = (c-32)*(5/9);
  let result = celsius.toFixed(1);
  return parseFloat(result); 
};

const convertToFahrenheit = function(f) {
  let fahrenheit = (f *(9/5) +32);
  let result = fahrenheit.toFixed(1);
  return parseFloat(result);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
