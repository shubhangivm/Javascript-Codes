// Question-12

// Write a function named add_numbers_list which takes two lists as arguments and adds the same position numbers and prints the sum of them.

// You can use the add_numbers function to add two numbers.
 
// If we have [50, 60, 10] and [10, 20, 13] and prints output like this.

// 60
// 80
// 23
var a=[50, 60, 10] 
var b=[10, 20, 13]

function add_numbers_list(arr1,arr2) {
    for (i in a){
        // console.log(arr2[i])
        function add_numbers(num1,num2) {
            console.log(num1+num2)
        }add_numbers(arr1[i],arr2[i])

    }
}
add_numbers_list(a,b)