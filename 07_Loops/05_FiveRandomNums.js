//Develop a small script which generate array of 5 random numbers

let randomNumberArray = [];

for(let i=0; i<5; i++){
    let x = Math.floor(Math.random() * 6) + 1;
    randomNumberArray.push(x);
    x = 0;    
}

console.log(randomNumberArray);
