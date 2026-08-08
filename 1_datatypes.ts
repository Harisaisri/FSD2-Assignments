let myName:string ="hari sai sri";
let myAge:number = 21;
let isStudent:boolean = true;
console.log("Data types of myName is -->",typeof myName);
console.log("Data types of myAge is -->",typeof myAge);
console.log("Data types of isStudent is -->",typeof isStudent);
function displaymyprofile(name:string,age:number,isStudent:boolean):void{
console.log(`My name : ${name}`);
console.log(`My age : ${age}`);
console.log(`I am a student : ${isStudent}`);
}
displaymyprofile(myName,myAge,isStudent);
