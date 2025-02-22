const form=document.querySelector('form');
form.addEventListener('submit',(obj)=>{ //executed when submitted the form
obj.preventDefault(); // preventing the page to get passed through url
const height=parseFloat(document.getElementById('height').value);
const weight=parseFloat(document.getElementById('weight').value);
if(height<0 || height==='' || isNaN(height))
{
    document.getElementById('res').innerHTML="Please Enter a valid height";
}
else if(weight<0 || weight=='' || isNaN(weight))
{
    document.getElementById("res").innerHTML = "Please Enter a valid weight";
}
else{
    const bmi =(weight/((height*height)/1000)).toFixed(2)
    
    if(bmi<18.6)
    {
        document.getElementById("res").innerHTML = `Your BMI is ${bmi} and you are underweight`;
    }
    else if(bmi>=18.6 && bmi<24.9)
    {
        document.getElementById("res").innerHTML = `Your BMI is ${bmi} and you are normal`;
    }
    else{
        document.getElementById("res").innerHTML = `Your BMI is ${bmi} and you are overweight`;
    }
}
})