"use strict";
let myName = "hari sai sri";
let myAge = 21;
let isStudent = true;
console.log("Data types of myName is -->", typeof myName);
console.log("Data types of myAge is -->", typeof myAge);
console.log("Data types of isStudent is -->", typeof isStudent);
function displaymyprofile(name, age, isStudent) {
    console.log(`My name : ${name}`);
    console.log(`My age : ${age}`);
    console.log(`I am a student : ${isStudent}`);
}
displaymyprofile(myName, myAge, isStudent);
