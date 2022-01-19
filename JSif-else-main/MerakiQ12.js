// Question-12
// Takes a number as user input. Check if this number is divisible by 5 and 15 both
// If it is divisibe by both prints "Divisible by both".
// else prints "Not divisible by both"
const k = require("readline-sync");
var number=k.question("Enter a number : ");
if (number%5==0 && number%15==0){
    console.log("The given number is divisible by 5 and 15 both.");
}else{
    console.log("Not divisible by both.");
}