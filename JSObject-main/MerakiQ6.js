// Question-6
// Write a program that calculates the sum of the values of an object.
// Example :
// Input :
// my_dict = {
// 'data1':100,
// 'data2': -54,
// 'data3': 247
// } 
// Output :-

// 293

my_dict = {
    'data1':100,
    'data2': -54,
    'data3': 247
}
var sum=0
for (let i in my_dict){
    sum=sum+my_dict[i]
} 
console.log(sum)
