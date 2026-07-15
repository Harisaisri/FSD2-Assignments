"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let Name = ("hello my first program");
let Age = 15;
let isMember = true;
console.log("Data type of userName is -->" + typeof Name);
console.log("Data type of userAge is -->" + typeof Age);
console.log("Data type of isMember is -->" + typeof isMember);
function displayUserProfile(name, age, active) {
    console.log("User:" + name);
    console.log("Age:" + age);
    console.log(`Status:${active ? "Active" : "Inactive"}`);
}
displayUserProfile(Name, Age, isMember);
//# sourceMappingURL=datatypes.js.map