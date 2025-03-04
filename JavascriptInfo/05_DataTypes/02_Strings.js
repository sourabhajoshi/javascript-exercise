// string : collection of unicode chars enclosed in '' or "" or ``

let myName = "Joshi";
let myCity = 'Bidar'
let myCountry = `India`

console.log(myName, myCity, myCountry); //Joshi Bidar India

//Backticks are “extended functionality” quotes. They allow us to embed variables and expressions into a string by wrapping them in ${…}, for example:

console.log(`My name is ${myName} am from ${myCity} and ${myCountry} is my country.`); //My name is Joshi am from Bidar and India is my country.

//Addition inside ${...}
console.log(`Addition of 2 and 3 is ${2+3}`);

