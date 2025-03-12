//Use for loop to iterate from 0 to 100 and print only even numbers

console.log("Even numbers : ");
for(let i=0; i<=100; i++){
    if(i%2 == 0){
        process.stdout.write(i + " ")
    }
}

console.log();
console.log("Odd numbers : ");
for(let i=0; i<=100; i++){
    if(i%2 != 0){
        process.stdout.write(i + " ")
    }
}