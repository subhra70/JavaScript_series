// integrating symbol in details object
const sym=Symbol("key")
console.log(sym.description); // showing symbol description

const details={
    name:"Subhra", //by default key is treated as string
    phone:"7044548947",
    [sym]:"key1", //square bracket must otherwise sym will be a string
    location:"Bhabanipur",
    "age":21
}
console.log(details.name) 
console.log(details["name"]); // we should remember this
console.log(details.age);
console.log(details[sym]);

details.greetings=function()
{
    console.log("Hello sir");
    
}
console.log(details.greetings());


