// Question-9
// Take user input in a variable named varx.
// Check if this number is divisible by 2.
// Console that number is divisible by 2 or not
// If number is divisible by 2 console 2 se “divisible hai” else “not divisible”

const k=require("readline-sync");
var varx=k.questionInt("enter the number: ");
if (Number%2==0){
    console.log("Divisible by 2")
}else{
    console.log("Not divisible by 2.")
}