// Different array declarations
const arr1=[1,2,5,6]
const arr2=["Ironman","Thor","Hulk"]
const arr3=[1,2,"Subhra",2.5,true]
const arr4=new Array(1,2,5)
/*JavaScript arrays are resizable and can contain a mix of different data types.
JavaScript array-copy operations create shallow copies. (shallow copies means share same references)*/
// console.log(arr2)
// console.log(arr3[2])

// Different methods
// let len=arr1.length;
// console.log(len)

// arr1.push(7)
// console.log(arr1)
// arr3.pop()
// console.log(arr3)
// arr2.unshift("Captain America")
// console.log(arr2);
arr2.shift()
console.log(arr2);

console.log("Main Array",arr1);

const modArr1=arr1.slice(0,2)
console.log(modArr1);
console.log("Main",arr1);

const modArr2=arr1.splice(1,2)
console.log(modArr2);
console.log("Main",arr1);

/*
In slice upper limit not includes in the sliced array and only the copy of sliced are stored. Actual array remains same
In splice upper limit included in the sliced array and that specific section get stored (not a copy of that section) changing the actual array
*/