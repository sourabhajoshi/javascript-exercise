"use strict"; // Explicitly enabling strict mode

let num1 = 20;
console.log(num1);  // 20

num2 = 30;  // This will cause an error in strict mode because num2 is not declared
console.log(num2);

num3 = 35;  // Also will cause an error because num3 is not declared with let/const
console.log(num3);
