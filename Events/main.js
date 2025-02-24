// There are several types of calling event
// 1. Adding event in an html tag

// function flowerClick() {
//   alert("Flower image clicked");
// }

// //2. Using like this
// document.getElementById("img2").onclick = function () {
//   alert("Girl image clicked");
// };

// //3. Using addEventListner() [best and preferred approach]
// document.getElementById("img3").addEventListener(
//   "click",
//   () => {
//     alert("Bulb image clicked");
//   },
//   false
// );

//Basic addEventListner syntax
/*
document.getElementById('id').addEventListner('event_type',function,True/False)
* third parameter is called event propagation, there are two context of propagation 1. Event bubbling 2. Event Capturing

Event bubbling: default value which is false, it executes element from bottom to up, such that a bubble goes from inner to outer, 
that way it executes the inner element content first and then the outer

Event capturing: value is true, opposite to the bubbling, here execution is top down.

we will use according to our usecase
*/
// Execution of bubbling
// document.getElementById('images').addEventListener('click',()=>{alert("Clicked inside the ul")},false)
// document.getElementById('img4').addEventListener('click',()=>{alert("Clicked on Beach image")},false) //executes first

// Execution of capturing
// document.getElementById('img5').addEventListener('click',()=>{console.log("Clicked on sunset")},true) //execute first
// document.getElementById('images').addEventListener('click',()=>{console.log("Clicked inside the ul")},true)

//we can also stop the propagation that is when one executes it execution does not go to next
// document.getElementById("images").addEventListener(
//   "click",
//   (e) => {
//     console.log("Clicked inside the ul");
//     e.stopPropagation();
//   },
//   true
// );

//prevent default method
// document.getElementById('yt').addEventListener('click',(e)=>{
//   console.log(e);
  
//   e.preventDefault() //this restricts the element to do its work
//   console.log("You tube click prevented");
// }, false)

// Doing a thing such that when a image is clicked it should disappear
const images=document.getElementById('images')
images.addEventListener('click',(e)=>{
  const target=e.target.parentNode;
  console.log(target);
  // const target = e.target;
  // target.style.display="none" //it disappear the image the list element still present

  // target.style.display = "none"; html style
  target.remove()
},false)

// things to be learn about event object
/*
the object e which we are taking as a parameter has several methods, we can learn few things from it like
1. type 2. timestamp 3. preventDefault 4. target(important) 5. toElement 6. srcElement 7. currentTarget 8. clientX & clientY
9. screenX & screenY 10. altKey 11. ctrlKey 12. shiftKey 13. keyCode (search the code for the key in internet)
*/