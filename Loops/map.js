const nums=[1,2,3,4,5,6,7,8,9,10]
const add10Num=nums.map((item)=>item+10)
console.log(add10Num);

// adding 5 to all then finding even numbers
const newNum=nums.map((item)=>item+5).filter((item)=>item%2==0)
console.log(newNum)
