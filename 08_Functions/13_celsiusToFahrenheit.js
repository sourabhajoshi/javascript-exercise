// Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.

const convertCelsiusToFahrenheit = celsius => (celsius * (9/5) + 32);

console.log(`15°C is equal to ${convertCelsiusToFahrenheit(15)}°F`);
