/*
Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle
(area = 0.5 x b x h).

Enter base: 20
Enter height: 10
The area of the triangle is 100
*/

const readline = require("readline");

// Create an interface for reading input from the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask the user for the base and height of the triangle
rl.question("Enter the base of the triangle: ", (base) => {
  rl.question("Enter the height of the triangle: ", (height) => {
    // Convert the input to numbers
    base = parseFloat(base);
    height = parseFloat(height);

    // Calculate the area of the triangle
    let area = 0.5 * base * height;

    // Display the result
    console.log("The area of the triangle is " + area);

    // Close the readline interface
    rl.close();
  });
});

