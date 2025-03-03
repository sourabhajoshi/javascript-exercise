/* 
Using console.log() print out the following statement:
The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.

Using console.log() print out the following quote by Mother Teresa:
"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."

Check if typeof '10' is exactly equal to 10. If not make it exactly equal.

Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.

Check if 'on' is found in both python and jargon

I hope this course is not full of jargon. Check if jargon is in the sentence.

Generate a random number between 0 and 100 inclusively.

Generate a random number between 50 and 100 inclusively.

Generate a random number between 0 and 255 inclusively.

Access the 'JavaScript' string characters using a random number.

Use console.log() and escape characters to print the following pattern.

1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125
Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
*/

console.log("1 " + "-".repeat(100))
//01 Using console.log() print out the following statement:
// The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.'
console.log("There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");

console.log("2 " + "-".repeat(100))
//02 Using console.log() print out the following quote by Mother Teresa:
// "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.");

console.log("3 " + "-".repeat(100))
//Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
console.log(typeof 10 == typeof '10');
console.log(typeof 10 == typeof parseInt('10'));

console.log("4 " + "-".repeat(100))
//Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
console.log(parseFloat('9.8') == 10);
console.log("floor value : ", Math.floor(9.8));
console.log("ceil value : ", Math.ceil(9.8));

console.log(Math.ceil(parseFloat('9.8')) == 10);

console.log("5 " + "-".repeat(100))
//Check if 'on' is found in both python and jargon
console.log('python'.includes('on'));
console.log('jargon'.includes('on'));

console.log("6 " + "-".repeat(100))
//I hope this course is not full of jargon. Check if jargon is in the sentence.
console.log("I hope this course is not full of jargon".includes("jargon"));

console.log("7 " + "-".repeat(100))
//Generate a random number between 0 and 100 inclusively.
let randomNum = Math.random()
let numBtwnZeroAnd100 = randomNum * 11
console.log(Math.floor(numBtwnZeroAnd100));

console.log("random num b/w 0 to 100 ", Math.floor(Math.random() * 101));
let anotherRandomNum = Math.floor(Math.random() * 101); 
console.log("Another random num between 0 and 100:", anotherRandomNum);

console.log("8 " + "-".repeat(100))
//Generate a random number between 50 and 100 inclusively.
console.log("Generate a random number between 50 and 100 inclusively : ", Math.floor(Math.random() * 51) + 50);

console.log("9 " + "-".repeat(100))
//Generate a random number between 0 and 255 inclusively.
console.log("Generate a random number between 0 and 255 inclusively : ", Math.floor(Math.random() * 256));

console.log("10 " + "-".repeat(100))
//Access the 'JavaScript' string characters using a random number.
let str = "JavaScript"
console.log("Access the 'JavaScript' string characters using a random number.", str[Math.floor(Math.random() * str.length)]);




