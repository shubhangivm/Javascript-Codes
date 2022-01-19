
// Question7
// Write a program to console numbers between 1 to 100 which are divisible by 7.
// Sample : input 100
// Sample output : 7
//  Write a program to console numbers between 1 to 100 which are divisible by 7. Sample : input 100 Sample : output 7 14 21 28 35 42 56 63 70 77 84 91 98


const k=require("readline-sync")
var num=k.questionInt("Enter a number: ")
var i=1;
while(i<=num){
    if (i%7==0){
    console.log(i)
    }
    i++
}
