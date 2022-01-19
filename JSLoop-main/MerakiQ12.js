// Write a program to take 10 user input, and print the sum of that 10 inputs. start from 50




// const k=require("readline-sync")
// var num=k.questionInt("Enter number of inputs: ")
let sum=0
for(i=51;i<=60;i++){
    const m=require("readline-sync")
    var n=m.questionInt("Enter a number: ")
    sum+=n
}
console.log(sum)
