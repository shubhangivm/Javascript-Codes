//Guessing game
var guess_num=5
let i=1
while (i<=10){
    const k=require("readline-sync")
    var user_guess=k.questionInt("Enter your guess number between 1 to 10: ")
    i=i+1
    if (user_guess<guess_num){
        console.log("Your guess is less than the correct guess value.")

    }else if (user_guess>guess_num){
        console.log("your guess is greater than the correct guess value.")

    }else if (user_guess==guess_num){
        console.log("congratulations!, you have guessed correct nunmber.")
        break
    }else{
        console.log("Incorrect guess")
    }
    if (i >10){
        console.log("Sorry you lost all chances.")
    }
}
