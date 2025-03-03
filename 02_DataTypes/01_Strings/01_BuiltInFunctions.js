/*
Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
Print the string on the browser console using console.log()
Print the length of the string on the browser console using console.log()
Change all the string characters to capital letters using toUpperCase() method
Change all the string characters to lowercase letters using toLowerCase() method
Cut (slice) out the first word of the string using substr() or substring() method
Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
Check if the string contains a word Script using includes() method
Split the string into an array using split() method
Split the string 30 Days Of JavaScript at the space using split() method
'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
Use startsWith() method with the string 30 Days Of JavaScript and make the result true
Use endsWith() method with the string 30 Days Of JavaScript and make the result true
Use match() method to find all the a’s in 30 Days Of JavaScript
Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
Use repeat() method to print 30 Days Of JavaScript 2 times
*/

let challenge = "30 days of JavaScript"

console.log("challenge : ", challenge);

console.log("Length of string : ", challenge.length)

console.log("capital letters of string : ", challenge.toUpperCase())

console.log("Lower case : ", challenge.toLowerCase())

//Cut (slice) out the first word of the string using substr() or substring() method
console.log("Fisrt word of string using substr : ", challenge.substr(0, 2));
console.log("Fisrt word of string using substring : ", challenge.substring(0, 2));

//Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript
console.log("Slice out strings : ", challenge.slice(3));

//Check if the string contains a word Script using includes() method
console.log("is string contain 'word' : ", challenge.includes("word"));
console.log("is string contain 'Script' : ", challenge.includes("Script"));

//Split the string into an array using split() method
console.log("Split str to array : ", challenge.split());
console.log("Split str to array : ", challenge.split(" "));

//'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log("Split str to array : ", companies.split(", "));

//Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
console.log("Change the string : ", challenge.replace(challenge, "30 Days of Python"));

//What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log("Charector at index 15 : ", challenge.charAt(15));

//What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log("char code of j : ", challenge.charCodeAt(challenge.indexOf('J')));

//Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log("Index of 'a' : ", challenge.indexOf('a'));

//Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log("last index of a : ", challenge.lastIndexOf('a'));

//Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let sentance = 'You cannot end a sentence with because because because is a conjunction'
console.log("first occurence of 'because' : ", sentance.indexOf('because'));

//Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log("last index of 'because' : ", sentance.lastIndexOf('because'));

//Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log("Position of because : ", sentance.search("because"));


//Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g '       30 Days Of JavaScript       '.
let str = '        30 Days Of JavaScript        '
console.log("Orignal string before trailing : ", str);
console.log("Remove trailing : ", str.trim());

// Use startsWith() method with the string 30 Days Of JavaScript and make the result true
console.log("is start with 30 : ", challenge.startsWith('30'));

// Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log("is ends with JavaScript : ", challenge.endsWith("JavaScript"));

// Use match() method to find all the a’s in 30 Days Of JavaScript

// Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
let fName = '30 Days of'
let lName = 'JavaScript'
console.log(fName + " " + lName);


// Use repeat() method to print 30 Days Of JavaScript 2 times
console.log("Repeat string 2 times : ", challenge.repeat(2));






