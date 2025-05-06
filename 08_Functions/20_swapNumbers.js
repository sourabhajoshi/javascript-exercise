// Declare a function name swapValues. This function swaps value of x to y.

// swapValues(3, 4) // x => 4, y=>3
// swapValues(4, 5) // x = 5, y = 4

const swapValues = (a, b) =>{
    console.log(`Before swap value of a = ${a} and b = ${b}`);
    let x = a;
    a = b;
    b = x;
    console.log(`After swap value of a = ${a} and b = ${b}`);
    console.log("");
    
}
swapValues(10, 20);
swapValues(4, 5);
swapValues(3, 4)