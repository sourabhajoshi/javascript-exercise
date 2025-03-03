/*
Use the Date object to do the following activities

What is the year today?
What is the month today as a number?
What is the date today?
What is the day today as a number?
What is the hours now?
What is the minutes now?
Find out the numbers of seconds elapsed from January 1, 1970 to now.

*/

// create a date object
let date = new Date();

console.log("What is the year today? ", date.getFullYear());

console.log("What is the month today as a number? ", date.getMonth()+1);  //0:jan, 1:feb, 2:mar... so on

console.log("What is the date today? ", date.getUTCDate());

console.log("What is the day today as a number? ", date.getDate());

console.log("What is the hours now? ", date.getHours());

console.log("What is the minutes now? ", date.getMinutes());

console.log("Find out the numbers of seconds elapsed from January 1, 1970 to now.");
// Get the current time in milliseconds since Jan 1, 1970
let currentTimeInMilliseconds = Date.now();

// Convert milliseconds to seconds
let noOfSeconds = Math.floor(currentTimeInMilliseconds / 1000);
console.log(noOfSeconds);






