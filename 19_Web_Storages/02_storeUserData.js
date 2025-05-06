// Store you first name, last name, age, country, city in your browser localStorage.

const { LocalStorage } = require('node-localstorage');
const localStorage = new LocalStorage('./scratch');

localStorage.setItem("firstName", "Sourabha");
localStorage.setItem("lastName", "Joshi");
localStorage.setItem("age", 25);
localStorage.setItem("country", "India");
localStorage.setItem("city", "Bidar");

for(let i=0; i<localStorage.length; i++){
    console.log(`${localStorage.key(i)} : ${localStorage.getItem(localStorage.key(i))}`);
}
//age : 25
// city : Bidar
// country : India
// firstName : Sourabha
// lastName : Joshi