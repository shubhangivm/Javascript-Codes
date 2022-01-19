// write a program to console all the numbers from 1 to 100.
// Sample : Input 100
// Sample output :
// 1 2 3 4 5 6 ... ……… ……… 100


// const k=require("readline-sync")
// var num=k.questionInt("Enter a number: ")
// var i=1;
// while(i<=num){
//     console.log(i)
//     i++
// }

const k=require("readline-sync")
var num=k.questionInt("Enter a number: ")
for(i=1;i<=num;i++){
    console.log(i)
}