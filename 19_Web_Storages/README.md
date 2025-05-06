# sessionStorage and localStorage

sessionStorage and localStorage are both part of the Web Storage API in JavaScript. They allow you to store data in the browser, but they differ in lifetime and scope.

```
// Save data
localStorage.setItem('key', 'value');
sessionStorage.setItem('key', 'value');

// Read data
let value = localStorage.getItem('key');
let sessionValue = sessionStorage.getItem('key');

// Remove a specific item
localStorage.removeItem('key');
sessionStorage.removeItem('key');

// Clear all items
localStorage.clear();
sessionStorage.clear();
```
