"use strict";
function greet(name) {
    return `Hello ${name}, welcome to SVECW!`;
}
function getcollegename(college = "SVECW") {
    return `the college name is ${college}`;
}
//3.optional parameters(using ?)
function sendalert(counsellingdate, message) {
    console.log(`Counselling date is ${counsellingdate}`);
    if (message) {
        console.log(`Message: ${message}`);
    }
}
//rest parameters(using ...)
function calculateSum(...numbers) {
    return numbers.reduce((total, current) => total + current, 0);
}
console.log(greet("hari"));
console.log(getcollegename());
console.log(getcollegename("srkr"));
sendalert(15);
sendalert(15, "Please attend the counselling session.");
console.log(calculateSum(1, 2, 3, 4, 5));
