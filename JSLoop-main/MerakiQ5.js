// Question5
// Given a string, write a program to check if it is palindrome or not.
// A string is said to be palindrome if the reverse of the string is the same as the string.
// For example :
// “RADAR” is a palindrome, but “RADIX” is not a palindrome


const k=require("readline-sync")
var str=k.question("Enter a string: ")
var len=(str.length)-1;
var txt="";
for (i=len;i>=0;i--){
    txt+=str[i];


}console.log(txt)
if (txt===str){
    console.log("Palindrome")
}else{
    console.log("Not palindrome")
}
