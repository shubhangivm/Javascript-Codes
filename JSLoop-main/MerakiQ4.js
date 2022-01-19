// Question4
// Program to print table of a given number

// take n as 2 and tell the output
// let n=require("readline-sync");
// let num=parseInt(n.question("enter number: "));
// for (let i=1;i<=10;i++) {
//        multi=num*i;
//        console.log(num + "x" + i + " = " + multi)
//    }



let n=require("readline-sync");
let num=parseInt(n.question("Enter the number : "));
for (i=1;i<=10;i++){
    multi=num*i;
    console.log(num+"x"+i+" = "+multi);
}