const num=[1,2,3,4,5,6,7,8,9,10]

const gt6Values=num.filter((item)=>item>6)
console.log(gt6Values);

const gt7Values=num.filter((item)=>{
    return item>7 //when using {} return is must
})
console.log(gt7Values);

const gt8Values=num.filter(function(item){
    return item>8 //using normal function
})
console.log(gt8Values);

const div5=num.filter((item)=>(item%5===0)) //using ()
console.log(div5);

//same thing using for each
// const gt5Values=num.forEach((item)=>{
//     if(item>5)
//     {
//         return item
//     }
// })
// console.log(gt5Values); for each returns nothing

// const add10Num=num.filter((item)=>item+10)
// console.log(add10Num);
//Not possible in filter
