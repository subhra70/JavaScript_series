/* Two type of function declaration */

console.log(addOne(7))
function addOne(num)
{
    return num+1;
}
console.log(addOne(5))
// Here we can see function definition either placed below or the above the function call it does not give any error

// console.log(addTwo(4)); in this case, if the caller placed before the function definition it will give compilation error
const addTwo=function(value)
{
    return value+2
}
console.log(addTwo(3));
// this process is called hoisting