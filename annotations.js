"use strict";
let cartoon = "shinchan";
let startingyear = 1992;
let isPopular = true;
function getCartoonDetails(name, year, popular) {
    return `${name} started in the year ${year} and it is ${popular ? "popular" : "not popular"}`;
}
let leadCharacter = ["Shinchan", "Himawari", "Misae", "Hiroshi"];
const summary = getCartoonDetails(cartoon, startingyear, isPopular);
console.log(summary);
console.log(`lead characters of ${cartoon} are --> ${leadCharacter.join(", ")}`);
