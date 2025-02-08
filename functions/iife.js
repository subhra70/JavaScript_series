// IIFE -> Immediately Invoked Function Expression

// normal iife
(function morning(){
    console.log("Good morning");
})(); // Here semicolon must because iife don't know where to stop execution

//named iife with normal function
(function afternoon(name){
    console.log(`Good afternoon ${name}`);
})("Subhra");

// named iife with arrow
((name)=>{
    console.log(`Good night ${name}`);
    
})("Subhra");
