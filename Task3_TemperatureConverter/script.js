document.addEventListener("DOMContentLoaded", () => {
  const temperatureInput = document.getElementById("temperature");
  const fromUnitSelect = document.getElementById("fromUnit");
  const toUnitSelect = document.getElementById("toUnit");
  const convertButton = document.getElementById("convert");
  const resultDiv = document.getElementById("result");

  convertButton.addEventListener("click", () => {
      const temperature = parseFloat(temperatureInput.value);
      const fromUnit = fromUnitSelect.value;
      const toUnit = toUnitSelect.value;

      if (isNaN(temperature)) {
          resultDiv.textContent = "Please enter a valid number.";
          return;
      }

      let convertedTemperature;
      if (fromUnit === "celsius") {
          if (toUnit === "fahrenheit") {
              convertedTemperature = temperature * 9 / 5 + 32; //Celsius to Fahrenheit
          } else if (toUnit === "kelvin") {
              convertedTemperature = temperature + 273.15; //Celsius to Kelvin
          } else {
              convertedTemperature = temperature; //Celsius to Celsius
          }
      } else if (fromUnit === "fahrenheit") {
          if (toUnit === "celsius") {
              convertedTemperature = (temperature - 32) * 5 / 9; //Fahrenheit to Celsius
          } else if (toUnit === "kelvin") {
              convertedTemperature = (temperature - 32) * 5 / 9 + 273.15; //Fahrenheit to Kelvin
          } else {
              convertedTemperature = temperature; //Fahrenheit to Fahrenheit
          }
      } else if (fromUnit === "kelvin") {
          if (toUnit === "celsius") {
              convertedTemperature = temperature - 273.15; //Kelvin to Celsius
          } else if (toUnit === "fahrenheit") {
              convertedTemperature = (temperature - 273.15) * 9 / 5 + 32; //Kelvin to Fahrenheit
          } else {
              convertedTemperature = temperature; //Kelvin to Kelvin
          }
      }

      resultDiv.textContent = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${toUnit.charAt(0).toUpperCase() + toUnit.slice(1)}`;
  });
});
