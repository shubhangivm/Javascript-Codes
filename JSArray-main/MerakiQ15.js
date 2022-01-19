// Question15
// Write a program to count how many odd numbers are there and 
// how many even numbers are there in a given list.
var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43]
var c1=0
var c2=0
for ( i of elements){
    if (i%2==0){
        c1+=1
    }else{
        c2+=1
    }
}
console.log("The count of even numbers is : "+c1)
console.log("The count of odd numbers is : "+c2)