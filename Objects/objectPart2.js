const details=new Object()
details.mail="shawsubhra@gmail.com"
details.phone="7025658945"
details.name={
    firstname:"Subhra",
    lastname:"Shaw"
}
console.log(details);
console.log(details.name);

const obj1={1:"A",
    2:"B"
}
const obj2={3:"C",
    4:"D"
}
const obj3=Object.assign({},obj1,obj2) // (target, source1, source2,...) not compulsory
const obj4={...obj1,...obj3}
console.log(obj3);
console.log(obj4);
console.log("Keys",Object.keys(details));
console.log("Values",Object.values(details));


