// Access the 'JavaScript' string characters using a random index
let str = "JavaScript";

// Generate a random index from 0 to str.length - 1
let randomIndex = Math.floor(Math.random() * str.length);

// Log the index and the character at that index
console.log("Random Index: ", randomIndex);
console.log("Character at Random Index: ", str[randomIndex]);

// Optional: Show the result on the webpage as well
document.body.innerHTML += `<p>Random Character from "JavaScript": ${str[randomIndex]}</p>`;
