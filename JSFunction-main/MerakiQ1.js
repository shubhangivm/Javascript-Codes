// Question-1
// Write a function sayBye() which takes 1 argument like user’s name and returns "Bye user’s name" ?

const k=require("readline-sync")
var username=k.question("Enter Your name: ")
function sayBye(username){
    return "Bye "+username
}
msg=sayBye(username)
console.log(msg)