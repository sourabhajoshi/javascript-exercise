// Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle

//function declaration
function getCircumOfCircle(radius){
    return (2 * Math.PI * radius);
}
console.log("Circumference of a circle : ", getCircumOfCircle(6));

//function expression
const circumOfCircle = function(radius){
    return (2 * Math.PI * radius);
}
console.log("Circumference of a circle : ", circumOfCircle(6));

//arrow function
const circumOfCircleWithArrow = radius => (2 * Math.PI * radius);
console.log("Circumference of a circle : ", circumOfCircleWithArrow(6));


