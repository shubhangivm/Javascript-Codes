// Question16
// Write a program to console the sum of odd numbers and sum of even numbers from a given list.
// var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43];
var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43]
var Evensum=0
var oddsum=0
for ( i of elements){
    if (i%2==0){
        Evensum+=i
    }else{
        oddsum+=i
    }
}
console.log("The sum of even numbers is : "+Evensum)
console.log("The sum of odd numbers is : "+oddsum)