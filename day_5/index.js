const crypto = require("crypto");


// randomBytes
// const randomvalues  = crypto.randomBytes(10);

// console.log(randomvalues.toString("ascii")); //inside () we can mention base64 or ascii 



// hashvalue
const hashvalue = crypto.createHash("sha256").update("Abhisek").digest("hex")

const inputvalue = "Abhisek"
const matchvalue = crypto.createHash("sha256").update(inputvalue).digest("hex")

if(hashvalue == matchvalue){
    console.log("You can login!")

}else{
    console.log("Something went wrong!")
}

// encryption and decryption in node.js
// have to learn myself 