let cartoon:string="shinchan";
let startingyear:number=1992;
let isPopular:boolean=true;

function getCartoonDetails(name:string,year:number,popular:boolean):string{
    return `${name} started in the year ${year} and it is ${popular ? "popular" : "not popular"}`;
}

let leadCharacter:string[]=["Shinchan","Himawari","Misae","Hiroshi"];
const summary:string =getCartoonDetails(cartoon,startingyear,isPopular);
console.log(summary);
console.log(`lead characters of ${cartoon} are --> ${leadCharacter.join(", ")}`);

