/*
Create a human readable time format using the Date time object

YYYY-MM-DD HH:mm
DD-MM-YYYY HH:mm
DD/MM/YYYY HH:mm
*/

// create date object
let date = new Date();

let currentYear = date.getFullYear();
let currentMonth = date.getMonth() + 1;
let currentdate = date.getDate();
let currentHour = date.getHours();
let currentMinute = date.getMinutes();

// Format each component to always have two digits (e.g., 01, 09, 05)
currentMonth = currentMonth < 10 ? `0${currentMonth}` : currentMonth;
currentdate = currentdate < 10 ? `0${currentdate}` : currentdate;
currentHour = currentHour < 10 ? `0${currentHour}` : currentHour;
currentMinute = currentMinute < 10 ? `0${currentMinute}` : currentMinute;

console.log("YYYY-MM-DD HH:mm : ", `${currentYear}-${currentMonth}-${currentdate} ${currentHour}:${currentMinute}`);
console.log("DD-MM-YYYY HH:mm : ", `${currentdate}-${currentMonth}-${currentYear} ${currentHour}:${currentMinute}`);
console.log("DD-MM-YYYY HH:mm : ", `${currentdate}/${currentMonth}/${currentYear} ${currentHour}:${currentMinute}`);

