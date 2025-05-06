# sessionStorage and localStorage

sessionStorage and localStorage are both part of the Web Storage API in JavaScript. They allow you to store data in the browser, but they differ in lifetime and scope.

#### **localStorage**

localStorage is part of the Web Storage API in JavaScript that allows you to store key–value pairs in a web browser with no expiration. The data stays saved even after the browser is closed or the computer is restarted — unless you explicitly clear it.

It's commonly used to store small amounts of data such as user preferences, app settings, or tokens.

install package to use localStorage
```
npm install node-localstorage
```

**1. setItem(key, value)**

Stores a key–value pair.
```
localStorage.setItem('username', 'john');
```

**2. getItem(key)**

Retrieves the value associated with the given key.
```
const name = localStorage.getItem('username'); // 'john'
```

**3. removeItem(key)**

Removes the key and its value from storage.
```
localStorage.removeItem('username');
```

**4. clear()**

Clears all data from localStorage.
```
localStorage.clear();
```

**5. length**

Returns the number of items stored.
```
const totalItems = localStorage.length;
```

**6. key(index)**

Returns the key at the specified index.
```
const firstKey = localStorage.key(0);
```

example with object
```
const user = { name: 'Alice', age: 30 };
localStorage.setItem('user', JSON.stringify(user));

// Later...
const storedUser = JSON.parse(localStorage.getItem('user'));
console.log(storedUser.name); // 'Alice'
```


| Feature          | `localStorage`                             | `sessionStorage`                           |
|------------------|--------------------------------------------|---------------------------------------------|
| **Lifetime**     | Persists until explicitly deleted           | Clears when the tab or browser window closes |
| **Scope**        | Shared across all tabs/windows of the domain| Only available in the tab that created it    |
| **Storage Limit**| Approximately 5–10 MB                       | Approximately 5 MB                           |
| **Persistence**  | Survives page reload and browser restart   | Survives page reload but not browser/tab close |

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

#### **sessionStorage**

sessionStorage is part of the Web Storage API in JavaScript that stores key–value pairs for the duration of a page session. A session lasts as long as the browser tab or window is open. Once it’s closed, the data is automatically cleared.

```
// Set data
sessionStorage.setItem("user", "Sourabha");
sessionStorage.setItem("theme", "dark");

// Get data
let user = sessionStorage.getItem("user");
let theme = sessionStorage.getItem("theme");
console.log(user);   // Sourabha
console.log(theme);  // dark

// Remove a key
sessionStorage.removeItem("theme");

// Check remaining keys
console.log(sessionStorage.length); // 1
console.log(sessionStorage.key(0)); // 'user'

// Clear all session data
sessionStorage.clear();
```
