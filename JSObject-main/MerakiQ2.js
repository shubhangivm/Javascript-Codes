// Question-2
// Write a programme to generate and print a dictionary that contains a number (between 1 and n) in the form (x, x*x).
// Sample input (n = 5) :
// Output : {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}.
const k=require("readline-sync");
var n=k.questionInt("Enter number: ");
d1={}
let i=1
while (i<=n){
    d1[i]=i*i;
}
console.log(d1);