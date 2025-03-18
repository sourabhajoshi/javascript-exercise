// Write a JS  program to swap two variables

let var1 = 10;
let var2 = 20;
console.log(`Before swapping variables : var1 = ${var1} and var2 = ${var2}`);


let temp = var1;
var1 = var2;
var2 = temp;
console.log(`After swapping variables : var1 = ${var1} and var2 = ${var2}`);

[var1, var2] = [var2, var1];
console.log(`Again swap to make orignal variables : var1 = ${var1} and var2 = ${var2}`);