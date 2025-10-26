const convertToCelsius = function(fahnherit) {
  let celcius =(fahnherit-32)*5/9
  return Number(celcius.toFixed(1))

  
};

const convertToFahrenheit = function(celcius) {
  let fahnherit = (celcius*9/5)+32
  return Number(fahnherit.toFixed(1))
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
