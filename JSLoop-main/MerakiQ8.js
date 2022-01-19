// Question8
// Write a program to calculate the sum of the numbers of 1 to 100 .
// Like this 1+2+3+4 +5+6+7....+95+96+97+98+99+100
// then console sum of the numbers.
// Sample : input 100 Samput : output 5050

const k=require("readline-sync")
var num=k.questionInt("Enter a number: ")
let sum=0
for(i=1;i<=num;i++){
    sum+=i
}
console.log(sum)