const fs=require("fs")
const k=require("readline-sync")
str="10\n20"
var user_input=k.question("Do you want to more expense (y/n): ")
if (user_input=="y"){
    var expense=k.question("Enter value")
    str=str+"\n"+expense
}else{
    console.log("Thank you.")
}
fs.writeFileSync("expenses.txt",str)
var E=fs.readFileSync("expenses.txt",{encoding:'utf8',flag:'r'})
var sum=0
value=E.split("\n")
// console.log(value)
for (i of value){
    sum+=Number(i)
}
console.log(sum)


// var sum=0
// const lineReader = require('line-reader');
// lineReader.eachLine('expenses.txt',(line,last)=>{
//     // console.log(line);
//     sum+=Number(line)
//     console.log(sum,'sum');
// })
// console.log(sum);










