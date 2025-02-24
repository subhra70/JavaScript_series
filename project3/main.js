const clock=document.querySelector('.clock')
let date=new Date()
console.log(date.getTime());
clock.innerHTML=date.toLocaleTimeString()

setInterval(()=>{
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
},1000) //second parameter is the interval period