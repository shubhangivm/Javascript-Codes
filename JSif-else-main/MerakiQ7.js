// Question-7
// You have a variable called number with the value as shown:
// var number1 = 44 * 30
// Check if this number1 is greater than or equal to number2. If the entered number2 is greater than or equal to number1, console "number2 is greater than or equal" else console "number2 is lesser".

const k = require("readline-sync");
var num2=k.question("Enter a number : ");
var num1=44*30
if (num2>=num1){
    console.log(" Number 2 is Greater than or equal to ");
}else{
    console.log("Number 2 is lesser");
}