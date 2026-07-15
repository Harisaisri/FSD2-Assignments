"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function visited(place) {
    console.log(`I went to ${place}`);
}
//Default parameter
function getAge(age = 18) {
    return `Age: ${age}`;
}
//Optional parameter(use ?)
function sendMessage(mobileNumber, message) {
    console.log(`Sending message to ${mobileNumber} it is my frnd number`);
    if (message) {
        console.log(`Content:${message}`);
    }
}
function calculateTotal(...marks) {
    return marks.reduce((tot, curr) => tot + curr, 0);
}
visited("Varanasi");
console.log(getAge());
console.log(getAge(20));
sendMessage(987654321);
sendMessage(987654321, "Hello how are you??");
const tot = calculateTotal(10, 75, 68, 100);
console.log(`Total marks are:${tot}`);
//# sourceMappingURL=functions.js.map