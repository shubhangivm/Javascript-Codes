console.log("Welcome to cosmos ATM.")

var card_pin=7171
var Balance=60000
console.log("Insert your card..")
const k=require("readline-sync")
var language=k.question("Enter language (english/marathi): ")
if (language=="english"){
    var pin=k.questionInt("enter your pin: ")
    console.log("Please wait.. checking your pin...")
    if (pin===card_pin){
        console.log("correct pin. ")
        var transaction=k.question("select transaction(cash withdrawal/balance enquiry/change pin) :  ")
        if (transaction=="cash withdrawal"){
            var select_amount=k.question("Select account type (saving/current) ")
            var amount=k.question("enter amount: ")
            var remaining_amount=Balance-amount
            console.log("Please collect your cash...")
            console.log("Your available balance is ",remaining_amount)
            var user_input=k.question("do you want receipt? enter y or n: ")
            if (user_input=="y"){
                console.log("Collect receipt.")
                console.log("Transaction done.")
                console.log("Thank you for using cosmos ATM.")
            }else{
                console.log("Transaction done.")
                console.log("Thank you for using cosmos ATM.")

            }


        }
        else if (transaction=="balance enquiry"){
            var account=k.question("select your account(saving/current) : ")
            console.log("your available balance is "+Balance)
            console.log("Thank you for using cosmos ATM")
            receipt=k.question("do you want receipt?(enter y or n) : ")
            if (receipt=="y"){
               print("collect receipt..")
                print("Thank you for using cosmos ATM")
            }else{
                print("Thank you for using Cosmos ATM.")
            }
        }
        else if (transaction=="change pin"){
            newpin=k.questionInt("please enter new pin : ")
            pin=k.questionInt("please re-enter your pin : ")
            console.log("New Pin Updated..")
            console.log("please take your card..")
            console.log("Thank you for using Cosmos ATM.")

        }
    }else{
        console.log("your pin number is wrong.")
    }

}else if (language=="marathi"){
    var pin=k.questionInt("तुमचा पिन प्रविष्ट करा: ")
    console.log("कृपया प्रतीक्षा करा.. तुमचा पिन तपासत आहे....")
    if (pin===card_pin){
        console.log("योग्य पिन. ")
        var transaction=k.question("व्यवहार निवडा (रोख पैसे काढणे- 1  /शिल्लक चौकशी -2/पिन बदलणे -3)  :  ")
        if (transaction=="1"){
            var select_amount=k.question("खाते प्रकार निवडा (जतन-1 /वर्तमान -2)")
            var amount=k.question("रक्कम प्रविष्ट करा : ")
            var remaining_amount=Balance-amount
            console.log("कृपया तुमची रोख रक्कम गोळा करा....")
            console.log("तुमची उपलब्ध शिल्लक आहे ",remaining_amount)
            var user_input=k.question("तुम्हाला पावती हवी आहे का? y किंवा n प्रविष्ट करा: ")
            if (user_input=="y"){
                console.log("पावती गोळा करा.")
                console.log("व्यवहार झाला.")
                console.log("कॉसमॉस एटीएम वापरल्याबद्दल धन्यवाद.")
            }else{
                console.log("व्यवहार झाला.")
                console.log("कॉसमॉस एटीएम वापरल्याबद्दल धन्यवाद.")

            }


        }
        else if (transaction=="2"){
            var account=k.question("खाते प्रकार निवडा (जतन-1 /वर्तमान -2) : ")
            console.log("तुमची उपलब्ध शिल्लक आहे "+Balance)
            console.log("कॉसमॉस एटीएम वापरल्याबद्दल धन्यवाद. ")
            receipt=k.question("तुम्हाला पावती हवी आहे का? y किंवा n प्रविष्ट करा : ")
            if (receipt=="y"){
               console.log("पावती गोळा करा...")
                console.log("कॉसमॉस एटीएम वापरल्याबद्दल धन्यवाद.")
            }else{
                console.log("कॉसमॉस एटीएम वापरल्याबद्दल धन्यवाद.")
            }
        }
        else if (transaction=="3"){
            newpin=k.questionInt("कृपया नवीन पिन प्रविष्ट करा ")
            pin=k.questionInt("कृपया तुमचा पिन पुन्हा प्रविष्ट  करा: ")
            console.log("नवीन पिन अद्यतनित..")
            console.log("कृपया तुमचे कार्ड घ्या..")
            console.log("कॉसमॉस एटीएम वापरल्याबद्दल धन्यवाद.")

        }
    }else{
        console.log("तुमचा पिन नंबर चुकीचा आहे.")
    }

}else{
    console.log("Thank you.")
}
