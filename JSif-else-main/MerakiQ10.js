// Question-10
// Take two numbers as input from the user in variables varx and vary.
// Check whether varx is divisible by vary.
// If yes, console Divisible else console Not Divisible.
const k = require("readline-sync");
var varx=k.question("Enter a number : ");
const m= require("readline-sync");
var vary=m.question("Enter a number : ");
if (varx%vary==0){
    console.log("yes, divisible.")
}else{
    console.log("not divisible.")
}