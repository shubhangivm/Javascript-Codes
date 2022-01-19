// Question-6
// You have a variable called var num1 with the value as shown:
// var num1 = 300 - 123
// Take one user input and check that number is equal or not.
// If the new user input is equal to num1, console "Equal" else console "Not equal".

const k = require("readline-sync");
var number=k.question("Enter a number : ")
var num1=300-123
if (num1==number){
    console.log("Equal")
}else{
    console.log("Not Equal")
}