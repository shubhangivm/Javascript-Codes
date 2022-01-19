// Question-13

// Write a function named check_numbers which will take two numbers and 
// check if both are even prints “Both are even” else prints “Both are not even”.
(function check_numbers(num1,num2) {
    if (num1%2==0 && num2%2==0){
        console.log("Both are even")
    }else{
        console.log("Both are not even.")
    }
}(12,14))