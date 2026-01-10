const fs = require("fs");

fs.writeFile("write.txt", "Hello from Abhi" , (err) =>{
  if(err){
    console.log(err);
    
  }else{
    console.log("file created");
    
  }
})

// setTimeout(() => {
//     console.log("Hello I am from global");

// }, 2000);

// let count = 0;
// const interval = setInterval(() => {
//   console.log(`Interval count: ${++count}`);

//   if (count === 4) {
//     clearInterval(interval);
//   }
// }, 1000);

