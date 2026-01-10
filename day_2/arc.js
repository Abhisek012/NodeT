// process.env.UV_THREADPOOL_SIZE =5;


// setImmediate(() => {
//   console.log("Hello from immediate -1");
// }, 0);

// setTimeout(() => {
//   console.log("Hello from timeout -1");
// }, 0);

// console.log("Hello form console -1");




let start = Date.now()
const crypto = require("crypto")

crypto.pbkdf2("password-1" , "salt1" , 100000 , 1024 , "sha512" , ()=>{
    console.log(`${Date.now() - start}ms Done`);
    
})
crypto.pbkdf2("password-1" , "salt1" , 100000 , 1024 , "sha512" , ()=>{
    console.log(`${Date.now() - start}ms Done`);
    
})
crypto.pbkdf2("password-1" , "salt1" , 100000 , 1024 , "sha512" , ()=>{
    console.log(`${Date.now() - start}ms Done`);
    
})
crypto.pbkdf2("password-1" , "salt1" , 100000 , 1024 , "sha512" , ()=>{
    console.log(`${Date.now() - start}ms Done`);
    
})
crypto.pbkdf2("password-1" , "salt1" , 100000 , 1024 , "sha512" , ()=>{
    console.log(`${Date.now() - start}ms Done`);
    
})
crypto.pbkdf2("password-1" , "salt1" , 100000 , 1024 , "sha512" , ()=>{
    console.log(`${Date.now() - start}ms Done`);
    
})

//figure out how to increaase threadpool in crypto
