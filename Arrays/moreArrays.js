const numbers=[1,2,3,4,5]
const strings=["A","B","C","D"]
const booleans=[true,false,true,true]

// Using push
// numbers.push(strings)
// console.log(numbers);
// console.log(numbers[5]);

// using concat
// const modifiedArr=numbers.concat(strings)
// console.log(modifiedArr);
// console.log(numbers);


// using spread
// const modifiedArr2=[...numbers,...booleans,...strings]
// console.log(modifiedArr2);
/* It is easy when merging more than two arrays */

// let arr=[1,2,3,[4,5],[6,[7,8]]]
// let arr1=arr.flat(1)
// let arr2=arr.flat(2)
// let arr3=arr.flat(Infinity)
// console.log(arr1);
// console.log(arr2);
// console.log(arr3);
/* Flat takes how much depth to flat the array */

console.log(Array.isArray("Subhra"))
console.log(Array.from("Subhra"));
console.log(Array.from({name:"Subhra"}));// it can not directly convert it to array we have to specify either i want keys or values to form the array

let var1=5
let var2=7
let var3=9
let varArray=Array.of(var1,var2,var3)
console.log(varArray);
