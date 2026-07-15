function visited(place:string):void{
    console.log(`I went to ${place}`);

}
//Default parameter
function getAge(age:number=18):string{
    return `Age: ${age}`;
}
//Optional parameter(use ?)
function sendMessage(mobileNumber:number,message?:string):void{
    console.log(`Sending message to ${mobileNumber} it is my frnd number`);
    if(message){
        console.log(`Content:${message}`);
    }
}
function calculateTotal(...marks:number[]):number {
    return marks.reduce((tot,curr) => tot+curr,0);
}
visited("Varanasi");
console.log(getAge());
console.log(getAge(20));
sendMessage(987654321);
sendMessage(987654321,"Hello how are you??");
const tot=calculateTotal(10,75,68,100);
console.log(`Total marks are:${tot}`);

