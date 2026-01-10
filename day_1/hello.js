const maths = require("./maths");

console.log("hello world");
// console.log(window); ---> works in browser only
// console.log(alert); ---> works in browser only
// alert(hello); ---> works in browser only

// these functions are only defined for  browser i.e. client side not for node i.e. server side  


console.log("The value of my modele is ", maths.Addfunc(1,99)+ " and " + maths.Subfunc(50,5));
