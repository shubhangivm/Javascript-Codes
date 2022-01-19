// Question-11
// Take two numbers as input from the user.
// Console the number which is greater.
const k = require("readline-sync");
var number=k.question("Enter a number : ");
const m = require("readline-sync");
var number2=m.question("Enter a number : ");
if (number >number2){
    console.log(number,"This is greater number.");
}else{
    console.log(number2,"This is greater number.");
}