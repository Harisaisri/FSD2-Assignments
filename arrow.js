"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calRideNormal(price, tip) {
    return price + tip;
}
const calRideArrow = (price, tip) => {
    return price + tip;
};
//If the function has one line we can omit curly braces and return statement
const getThanks = (app) => `Thank you for booking ${app}.Have a nice ride!!`;
const rideCost = 123;
const rideTip = 18;
console.log(getThanks("Uber"));
const totA = calRideNormal(rideCost, rideTip);
console.log(`Total ride cost in Normal ${totA}`);
const totB = calRideArrow(rideCost, rideTip);
console.log(`Total ride cost in Arrow ${totB}`);
//# sourceMappingURL=arrow.js.map