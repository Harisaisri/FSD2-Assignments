function calRideNormal(price:number,tip:number): number {
return price+tip;
}
const calRideArrow  = (price:number,tip:number): number => {
return price+tip;
}
//If the function has one line we can omit curly braces and return statement
const getThanks = (app:string): string =>`Thank you for booking ${app}.Have a nice ride!!`;

const rideCost:number = 123;
const rideTip:number = 18;
console.log(getThanks("Uber"));

const totA=calRideNormal(rideCost,rideTip);
console.log(`Total ride cost in Normal ${totA}`);
const totB=calRideArrow(rideCost,rideTip);
console.log(`Total ride cost in Arrow ${totB}`);
  




