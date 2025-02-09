// for of loop
//* For normal arrays
const arr1=["ironman","captain america","thor",2,5]
for(const item of arr1)
{
    // console.log(item);
}

//* For Map type
const myMap=new Map()
myMap.set("choice1","Ironman")
myMap.set("choice2","Thor")
myMap.set("choice3","Spiderman")
for(const item of myMap)
{
    console.log(item);
}

//* For object type
// const myObj={
//     'roll1':"Sudip",
//     'roll2':'Rajib'
// }
// console.log(myObj);
// for(const obj of myObj)
// {
//     console.log(obj);
    
// } not iterbal for object
