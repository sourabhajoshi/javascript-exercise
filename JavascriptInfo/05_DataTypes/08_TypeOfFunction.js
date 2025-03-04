// The typeof operator

// Which can be defined in 2 ways, typeof value or typeof(value)


/*
typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function"  (3)

*/
console.log("typeof undefined : ", typeof undefined); //undefined
console.log("Typeof 0 : ", typeof 0); //number
console.log("typeof 10n : ", typeof 10n); //bigint
console.log("typeof foo : ", typeof "foo"); //string
console.log("typeof Symbol(\"id\") : ", typeof Symbol("id")); //symbol
console.log("typeof null : ", typeof null); //object




