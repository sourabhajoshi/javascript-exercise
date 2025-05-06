// Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).

// console.log(reverseArray([1, 2, 3, 4, 5]))
// //[5, 4, 3, 2, 1]
// console.log(reverseArray(['A', 'B', 'C']))
// //['C', 'B', 'A']

function reverseArray(arr) {
    let N = arr.length;
    const newArr = [];
    for (let i = 0; i < N; i++) {
        newArr.push(arr[N - 1 - i]);
    }
    return newArr;
}

// Test cases
console.log(reverseArray([1, 2, 3, 4, 5]));  // [5, 4, 3, 2, 1]
console.log(reverseArray(['A', 'B', 'C']));  // ['C', 'B', 'A']
