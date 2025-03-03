/*
Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
YYY-MM-DD HH:mm eg. 20120-01-02 07:05
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