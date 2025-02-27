//creating promise
// const promise1=new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         console.log("Async Task1 Completed");
//         resolve();
//     },2000)
// })

//Consuming promise
// promise1.then(()=>{
//     console.log("Promise 1 resolved");
// })

/* ---------------------------------------------------------- */

// Second type of creation of promises
// new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("Async Task2 Completed");
//         resolve()
//     },1000)
// }).then(()=>{
//     console.log("Promise2 resolved");
// })

/* ---------------------------------------------------------- */

// Returning value from promises
new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve({ name: "Subhra Shaw", location: "Bhabanipur" });
  }, 1000);
}).then((user) => {
  console.log(user);
});

// rejection and resolve chaining
new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ name: "Subhra Shaw", location: "Bhabanipur" });
    } else {
      reject("An error occured");
    }
  }, 1000);
})
  .then((user) => {
    console.log(user);
    return user.name;
  })
  .then((username) => {
    console.log(username);
    console.log("Last node of the chain executed");
  }).catch((err)=>{
    console.log("Error: "+err);
  })
