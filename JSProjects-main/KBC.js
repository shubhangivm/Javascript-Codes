//KBC

console.log("                 Hello!!🙏")
console.log("    WELCOME TO KBC-Kaun Banega Crorepati🎯    ")

const B=require("readline-sync")

function questions() {
    const list1=["How many continents are there?", 
    "What is the capital of India?",
    "NG mei kaun se course padhaya jata hai?"]
    return list1
}
questions_new=questions()

function options() {
    const option=[["four","nine","seven","eight"],
    ["chandigarh","Bhopal","chennai","Delhi"],
    ["Software engineering","Counseling","tourism","Agriculture"]]
    return option
}
options_new=options()

function solutions() {
    solution=[3,4,1]
    return solution
}
solutions_new=solutions()


var i=0
var c=0
var j=0
var sum_prize=0
while ((i<questions_new.length) && (j<options_new.length)){
    console.log("Your question is 👇")
    console.log(questions_new[j])
    var z=0
    var serialno=0
    
    for (z in options_new[j]){
        serialno+=1
        console.log(serialno,options_new[j][z])
        z+=1
        
    }
    if (c==0){
        var k=0
        var Prize=10000
        lifeline=B.question("Do you want to use 50-50 lifeline✨??, Enter y or n= ")
        if (lifeline=="y"){
            c=c+1
            var ans1=B.questionInt("Please enter your answer option⟹  ")
            var ans2=B.questionInt("Please enter your second answer option⟹  ")
            if (ans1==solutions_new[i] || ans2==solutions_new[i]){
            console.log("             Congratulations👏🏼🥳               ")
            console.log("Correct answer👏🏼✔️✔️, 🥳You win Rs= ", Prize, "💰")
            sum_prize=sum_prize+Prize
            }else{
            console.log("Sorry😢, Wrong answer, you are out of the game now, Thank for being part of the game🙏")
            break
            }
        }else if (lifeline=="n"){
            ans1=B.questionInt("Please enter your answer option⟹ ")
            console.log(solutions_new[i])
            if (ans1==solutions_new[i]){
                console.log("             Congratulations👏🏼🥳               ")
                console.log("Correct answer👏🏼✔️✔️, 🥳You win Rs= ", Prize, "💰")
                sum_prize=sum_prize+Prize
            }else{
                console.log("Sorry😢, Wrong answer, you are out of the game now, Thank for being part of the game🙏")
                break
            }    
        }

    }else{
        console.log("You don't have lifeline now")
        ans1=B.questionInt("Please enter your answer option⟹ ")
        
        console.log(solutions_new[i])
        if (ans1==solutions_new[i]){
            console.log("             Congratulations👏🏼🥳               ")
            console.log("Correct answer👏🏼✔️✔️, 🥳You win Rs= ", Prize, "💰")
            sum_prize=sum_prize+Prize
        }else{
            console.log("Sorry😢, Wrong answer, you are out of the game now, Thanks for being part of the game🙏")
            break
        }

    }
    
    j+=1
    i+=1

}
console.log("  Your total prize is : ",sum_prize)
console.log("          THANK YOU🙏")
