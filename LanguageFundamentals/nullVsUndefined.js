/* 

undefined → JavaScript says: "I don’t know the value yet."

null → You (the developer) say: "There is no value, I made it empty on purpose."

*/

//========================================================================================================

// udefined

let a;
console.log(a); // undefined (nothing given yet)

function greet(name) {
    console.log("Hello " + name);
}

greet(); // "Hello undefined" (because no name passed)

// 👉 JavaScript gives undefined when you don’t provide a value.


//========================================================================================================

// 2. null (you set it empty on purpose)

let b = null;
console.log(b); // null

let user = {
    name: "Prateek",
    age: null  // I know age, but I want it empty for now
};

console.log(user.age); // null


// 👉 You set null when you want to say "empty".


//========================================================================================================


//  What is the difference between null and undefined in JavaScript?

// undefined: A variable is declared but not assigned a value (default by JS).

// null: A value assigned by the developer to represent “empty”.




//========================================================================================================

//  What is the type of null and what is the type of undefined?

// typeof null → "object" (a historical bug in JavaScript).

// typeof undefined → "undefined".


//========================================================================================================


console.log(null == undefined);  // true
console.log(null === undefined); // false


// == does type conversion → considers both as empty.

// === checks type → null (object) and undefined (undefined) are different.


//========================================================================================================

// Why is typeof null equal to "object"?
// 👉 This is a bug in JavaScript from the early days. Internally, values were tagged as objects, and null got the same tag. It stayed for backward compatibility.


//========================================================================================================

// Why is typeof null equal to "object"?

// 👉 This is a bug in JavaScript from the early days. Internally, values were tagged as objects, and null got the same tag. It stayed for backward compatibility.

//========================================================================================================

// How do JSON.stringify() and JSON.parse() handle null and undefined?

JSON.stringify({a: null});      // '{"a":null}'
JSON.stringify({a: undefined}); // '{}'


// null is kept in JSON.

// undefined is removed (ignored).

//========================================================================================================

// Consider this code, what is the output and why?

let x;
let y = null;
console.log(x + 1); // NaN  (undefined + 1 → NaN)
console.log(y + 1); // 1    (null becomes 0 → 0 + 1 = 1)

//========================================================================================================

// Proof undefined is a data type?

let x;
console.log(x);           // undefined
console.log(typeof x);    // "undefined"

console.log(typeof undefined); // "undefined"


//========================================================================================================

