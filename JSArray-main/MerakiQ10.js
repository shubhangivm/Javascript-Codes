// Question10
// Write a program to reverse the element of the array.
// Hint
// When we have to take last element of array we can use length-1.
// Sample Input:
// var numbers=[50, 40, 23, 70, 56, 12, 5, 10, 7]
// sample Output:
// [7, 10, 5, 12, 56, 70, 23, 40, 50]


var numbers=[50, 40, 23, 70, 56, 12, 5, 10, 7]
numbers2=[]
let i=numbers.length-1
for (i;i>=0;i--){
    numbers2.push(numbers[i])
}
console.log(numbers2)