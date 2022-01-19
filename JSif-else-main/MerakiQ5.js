// Question-5
// In a variable named number, take the input from the user and convert it to int.
// If this number is less than 10 then print "number is less than 10". 
// If it is greater than 10 and less than 20 then print "number is less than 20". 
// Else if it is greater than 20 then print "greater than 20".
// For knowing how to take inputs please go through this page 



const k = require("readline-sync");
var number=k.questionInt('Enter the number');
console.log(number);
if (number<10) {
    console.log("Number is less than 10.");
}else if (null>10){
    console.log("Number is less than 20.");
}else{
    console.log("Number is greater than 20.");
}