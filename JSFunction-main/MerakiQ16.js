// uestion-16
// Write a function named perfect() which takes 1 parameter and\
//  checks that given parameter is a perfect number or not. 
// Perfect number means we will count the factors of a given number
//  including 1 but you need to exclude the own number as its factor.
// If it is a perfect number prints num is a perfect number hai or 
// else prints num is not a perfect number hain.
// Example:
// 6 ek perfect number hai 6=1+2+3.
// Output:
// 6 is a perfect number hain.
const k=require("readline-sync")
var num=k.questionInt("Enter a number: ")

function perfect(num) {
    let i=1
    sum=0
    while (i<num){
        if(num%i==0){
            sum+=i;
            
        }
        i++  
    }
    // console.log(sum)
    if (num===sum){
        console.log("It is a perfect number");
    }else{
        console.log("It is not a perfect number");
    }
}
perfect(num)
