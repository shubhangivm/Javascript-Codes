// Question-15

// Write a function named eligible_for_vote which takes age as a parameter and
//  prints if he/she is eligible to vote or not. ( Consider minimum age of voting to be 18. )
// Example:
// If a user given age as less than 18 prints “not eligible “ or 
// else if a user enters 18 or more than 18 prints “you are eligible”.
// Input:
// 18
// 16

// Output :
// “you are eligible”
// “not eligible”

const k=require("readline-sync")
var age=k.questionInt("Enter age: ")
function eligible_for_vote(age) {
    if (age>=18){
        console.log("You are eligible ")

    }else{
        console.log("Not eligible")
    }
    
}
eligible_for_vote(age)