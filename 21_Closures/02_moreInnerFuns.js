function outerFunction(){
    let count = 0
    function plusOne(){
        count++;
        return count;
    }

    function minusOne(){
        count--;
        return count
    }

    // return{
    //     plusOne : plusOne(),
    //     minusOne : minusOne()
    // }

    return{
        plusOne,  // Correct: returning reference to the function
        minusOne  // Correct: returning reference to the function
    }
}

const innerFunc = outerFunction();

// console.log(innerFunc.plusOne);
// console.log(innerFunc.minusOne);

console.log(innerFunc.plusOne());
console.log(innerFunc.minusOne());
console.log(innerFunc.plusOne());
