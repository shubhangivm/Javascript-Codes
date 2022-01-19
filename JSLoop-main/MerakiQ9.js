// Question9
// Create a loop that takes 10 numbers as input from the user.
// After taking the input console the sum of all those numbers.
// This program will go like this. Each time using readline-sync will take a number input from the user.
// Sample : input 10
// Then for example 10+16+9+10+56+78+98+43+21+76.. Total sum of number 417
// Sample : output 417

const k=require("readline-sync")
var num=k.questionInt("Enter number of inputs: ")
let sum=0
for(i=1;i<=num;i++){
    const m=require("readline-sync")
    var n=m.questionInt("Enter a number: ")
    sum+=n
}
console.log(sum)
