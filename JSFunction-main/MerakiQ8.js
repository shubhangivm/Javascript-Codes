// Question-8

// 1.Define an Self invoking function and call it by taking two arguments to 
// checkwhether they are equal or not?
// A self-invoking expression is invoked (started) automatically, without being called. 
// Function expressions will execute automatically if the expression is followed by ().
//  You cannot self-invoke a function declaration.

// (function (num1,num2){
// console.log(num1==num2)

// }(2,3))

 var m=(function equalornot(num1,num2){
    return num1==num2  
}(4,5))
console.log(m)