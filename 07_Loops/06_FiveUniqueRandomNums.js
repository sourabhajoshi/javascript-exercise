// Develop a small script which generate array of 5 random numbers and the numbers must be unique

let uniqueArrayList = [];

for(let i=0; i<5; i++){
    let randomNum = Math.floor(Math.random() * 6) + 1;
    if(uniqueArrayList.includes(randomNum)){
        i -= 1;
    }else{
        uniqueArrayList.push(randomNum);
    }
}
console.log(uniqueArrayList);
