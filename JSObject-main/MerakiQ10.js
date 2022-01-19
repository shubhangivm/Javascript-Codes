// Question-10
// Take 10 student inputs and marks and save them in an object.
// Output :-
// { 'sonu':85, 'Kartik':90, 'Deepak':96, 'Aman':76, 'Somesh':60, 'Umesh':85, 'Amarpal':70, 'Roshan':57, 'Riyaz':98, 'Shabid':56 }
const k=require("readline-sync")
var n=k.question("Enter the number of inputs: ")
d={}
for (let i=0;i<n;i++){
    var name=k.question("Enter the  name: ")
    var marks=k.question("Enter the marks: ")
    d[name]=marks
}
console.log(d)