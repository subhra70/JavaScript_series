let currDate=new Date()
console.log(currDate)
console.log(currDate.toString())
console.log(currDate.toDateString())
console.log(currDate.toLocaleString());
let myDate=new Date(2003,10,11) // in javascript date starts from 0 yyyy,m(0-11),d(1-31)
let myDate1=new Date("11-11-2003") // this format is different from the previous format
console.log(myDate.toDateString());
console.log(myDate1.toDateString());

let timestamp=Date.now()
console.log(timestamp); // outputs is in millisecond
console.log(myDate.getTime())
console.log(Math.floor((Date.now())/1000)) // in seconds

let date=new Date()
console.log(date.getDay());
console.log(date.getFullYear());
console.log(date.getMonth()); // starts from 0
console.log(date.getMinutes());



