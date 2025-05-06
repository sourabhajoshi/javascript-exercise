// Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.

function solveLinEquation(a, b, c, x, y) {
    let lhs = (a*x + b*y + c);
    return lhs;
}
console.log(solveLinEquation(2, 3, -6, 1, 2));
