const { LocalStorage } = require('node-localstorage');
const localStorage = new LocalStorage('./scratch');


//set item 
localStorage.setItem("userName", "Sourabha Joshi");
localStorage.setItem("city", "Bidar");

//get item
let myCity = localStorage.getItem("city");
let myName = localStorage.getItem("userName")
console.log(myCity); //Bidar
console.log(myName); //Sourabha Joshi
console.log("Current localStorage contents:");
for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    console.log(`${key}: ${value}`);
}


//remove item
localStorage.removeItem("city");

console.log("Current localStorage contents:");
for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    console.log(`${key}: ${value}`);
}

//clear localStorage
localStorage.clear();
console.log("Current localStorage contents:");
for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    console.log(`${key}: ${value}`);
}

