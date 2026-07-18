//traditional named function
function add(a: number, b: number): number {
    return a + b;
}

//arrow function
const addArrow = (a: number, b: number): number => {
    return a + b;
};

//shortened arrow function
const getwelcomemessage = (name: string): string => `Hello ${name}, welcome to SVECW!`;

console.log("Traditional function result:", add(5, 3));
console.log("Arrow function result:", addArrow(5, 3));
console.log("Shortened arrow function result:", getwelcomemessage("hari"));