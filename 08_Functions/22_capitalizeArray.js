// Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.

function capitalizeArray(arr){
    let N = arr.length;
    const capitalizedArr = [];
    for(let i=0; i<N; i++){
        const item = arr[i];
        // Capitalize only if it's a string
        if (typeof item === 'string') {
            capitalizedArr.push(item.toUpperCase());
        } else {
            capitalizedArr.push(item); // leave non-strings untouched
        }
    }
    return capitalizedArr;
}

console.log(capitalizeArray(['a', 'e', 'i', 'o', 'u']));
console.log(capitalizeArray(['hello', 'joshi']));