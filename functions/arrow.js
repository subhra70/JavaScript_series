/*const Student={
    roll:2,
    name:"Subhra",
    greettings:function()
    {
        console.log(this); //refers the whole object
        return `Hey ${this.name} please come` 
    }
}
console.log(Student.greettings());*/

/*function morning()
{
    let username="Subhra"
    console.log(`${this.username} good morning`); //here this not used
    
}
morning()*/
/*console.log(this); //Empty braces */

// arrow function
const night= () =>{
    let uname="Subhra"
    console.log(`Good night ${this.uname}`);
    
}
night()

// basic arrow function with two parameter
const add = (num1,num2) =>{
    return num1+num2;
}
console.log(add(5,6));

// implicit return 
const mul =(num1,num2) => num1*num2
const sub = (num1,num2) => (num2-num1) //this are for one line body only
const obj= () => ({name:"Subhra Shaw"}) // if we remove () it will give undefined as we are not using return statement
console.log(mul(2,3));
console.log(sub(2,5));
console.log(obj());

// When using "{}" we have to use return statement, if we are using "()" no need of return statement
