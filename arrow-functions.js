"use strict";
//traditional named function
function add(a, b) {
    return a + b;
}
//arrow function
const addArrow = (a, b) => {
    return a + b;
};
//shortened arrow function
const getwelcomemessage = (name) => `Hello ${name}, welcome to SVECW!`;
console.log("Traditional function result:", add(5, 3));
console.log("Arrow function result:", addArrow(5, 3));
console.log("Shortened arrow function result:", getwelcomemessage("hari"));
