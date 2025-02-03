//details1
const studentId=12; // type1
let studentName="Subhra Shaw"; //type2
var state="West Bengal"; //type3

// studentId=14; // Invalid statement
//details2
// const studentId=13; //this is also invalid because studentId variable already exist
// let studentName="Soumen jana" //this is also invalid because studentName already exist
var state="Uttarakhand" //though state variable already exist state does not gives error
console.log(state); // prints the latest value

/*
Note: 
const -> it has a scope and the value assigned can not be changed
let -> it has a scope that means variable declared once can not be redeclared but value can get changed
var -> it does not have any scope that is variable can be redeclared and value can get changed
** we should avoid using the var type
*/

// Another displaying technique
console.table([studentId,studentName,state])
