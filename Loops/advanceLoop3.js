// forEach loop
const arr=["subhra","souvick","sumit","soumen"]

//normal function
// arr.forEach(function (item){ // inside forEach using callback function hence don't have any name
//     console.log(item);
// })

// arr.forEach(function (item,index){ // inside forEach using callback function hence don't have any name
//     console.log(item,index);
// })

// arr.forEach(function (item,index,list){ // inside forEach using callback function hence don't have any name
//     console.log(item,index);
// })

//arrow function
// arr.forEach((val)=>{
// console.log(val);
// })

//another case
// function printVal(item)
// {
//     console.log(item);
// }
// arr.forEach(printVal) //here we should give the reference not execute like above

// accessing array of objects
const arrObj=[
    {lang:"Java",
        extension:".java"
    },
    {lang:"C++",
        extension:".cpp"
    },
    {lang:"Python",
        extension:".py"
    }
]
arrObj.forEach(function(item)
{
    console.log(item.lang,"->",item.extension);
    
})