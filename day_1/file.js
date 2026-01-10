const { log, error } = require("console")
const { response } = require("express")
const fs = require("fs")

const os = require("os")
console.log(os.cpus().length);


// sync - blocking code, async - non blocking code

// *write
//sync way -
//? fs.writeFileSync("./text.txt", "Hey wrold, this is sync writing. ")

//async way-
// fs.writeFile("./test.txt", "Hey this is async  code", (err) => {
//     console.log(err);
    
// })


// *read
// sync reading
// const responce = fs.readFileSync("./text.txt" , "utf8")
// console.log(responce);

// async reading
// fs.readFile("./test.txt", "utf8", (error, response) => {
//     if (error) {
//         console.log(error);
        
//     } else {
//         console.log(response);
        
//     }
// })


// *update / append

//sync way
// fs.appendFileSync("./test.txt", new Date().toDateString())

//async way
fs.appendFile("./log.txt", `Hello world this is Abhisek logged in at ${new Date().toDateString()}\n`, (error, response) => {
    if (error){
        console.log(error);
    } else {
        console.log(response);
    }
        
  })
    



// *delete
//*  cpSync
//*  ulikeSync
//*  statSync
//*  statSync
// mkdirSync