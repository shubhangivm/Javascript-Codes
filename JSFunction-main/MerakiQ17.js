// Question-17
// Write a function named average which takes 3 numbers and 
// prints the sum of 3 numbers and the average of 3 numbers.
// Input:-
// Enter first number : 3
// Enter second number : 4
// Enter third number: 5
// Output :
// Sum of three numbers :-12
// Average of three numbers :-4
const k=require("readline-sync")
let num1=k.questionInt("enter first number: ")
let num2=k.questionInt("enter second number: ")
let num3=k.questionInt("enter third number: ")
function average(n1,n2,n3) {
    console.log(n1+n2+n3)
    console.log((n1+n2+n3)/3)
}average(num1,num2,num3)
