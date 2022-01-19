// Write the program, to find the max element of the array,and console it.
// Sample Input:
// var numbers=[50, 40, 23, 70, 56, 12, 5, 10, 7]
// sample Output:
// 70

var numbers=[50, 40, 23, 70, 56, 12, 5, 10, 7]
var max=0
for (let i=0;i<numbers.length;i++){
    if (numbers[i]>max){
        max=numbers[i]
    }
}
console.log(max)