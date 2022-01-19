// Question9
// Write a program to check the second max of the array, and console it.
// Sample Input:
// var numbers=[50, 40, 23, 70, 56, 12, 5, 10, 7]
// sample Output:
// 56

var numbers=[50, 40, 23, 70, 56, 12, 5, 10, 7]
var max=0
var secondmax=0
for (i of numbers){
    if(i>max){
        max=i
    }else if (i<max && i>secondmax){
        secondmax=i
    }
}
console.log(secondmax)