// Question18
// Write a program where it will console these 3 parameters for odd and even numbers.
// count
// sum
// average
// var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43]


var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43]
var evenavg=0
var oddavg=0
var c1=0
var c2=0
var evensum=0
var oddsum=0
for ( i of elements){
    if (i%2==0){
        evensum+=i
        c1+=1
        evenavg=evensum/c1
    }else{
        oddsum+=i
        c2+=1
        oddavg=oddsum/c2
    }
}
console.log("The count of even numbers is : "+c1)
console.log("The count of odd numbers is : "+c2)
console.log("The sum of even numbers is : "+Evensum)
console.log("The sum of odd numbers is : "+oddsum)
console.log("The average of even numbers is : "+evenavg)
console.log("The average of odd numbers is : "+oddavg)