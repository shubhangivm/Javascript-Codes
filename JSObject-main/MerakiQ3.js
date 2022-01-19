// Question-3
// Write a program to print count a substring in a Main string.
// var mainString="My name is kumar, and my friend’s name is Dhamu" var subString="is"
// Output:
// The substring is there 2 times in main string.
var mainString="My name is kumar, and my friend’s name is Dhamu" ;
var subString="is";
let l=mainString.split(" ");
var c=0;
for (let i in mainString){
    if (l[i]===subString){
        c=c+1
    }
}
console.log("The substring is there "+c+" times in main string.");