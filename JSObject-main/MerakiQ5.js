// Question-5
// Write a program to take 1 input and check whether given input exists in our object or not, 
// if it exists print exists or else prints not exist.
// Example :
// dict={“name”:”Raju”, “marks”:56}
// if input is “name” then output will be “exist”
// If input is “class” then output will be “not exists”.
dict={"name":"Raju", "marks":56}
const k=require("readline-sync")
var user_input=k.question("Enter string: ")
for (i in dict){
    if(i===user_input){
        console.log("exist")
        break
    }
    else{
        console.log("Not exists")
        break
    }
}