// Question-14
// Write a function named check_numbers_list which takes two lists of integers and checks the numbers of the same index numbers whether they both are even or not. For checking both even or not you can use the function written in the previous question.
// If you give these lists [2, 6, 18, 10, 3, 75] and [6, 19, 24, 12, 3, 87] then the output should come like this.
// dono even hain
// dono even nahi hai
// dono even hain
// dono even hain
// dono even nahi hain
// dono even nahi hain
var a=[2, 6, 18, 10, 3, 75]
var b=[6, 19, 24, 12, 3, 87] 

function check_numbers_list(arr1,arr2) {
    for (i in a){
        
        function check_numbers(num1,num2) {
            if (num1%2==0 && num2%2==0) {
                console.log("Both are even")
            }else{
                console.log("Both are not even")
            } 
        }
        check_numbers(arr1[i],arr2[i])

    }
}
check_numbers_list(a,b)