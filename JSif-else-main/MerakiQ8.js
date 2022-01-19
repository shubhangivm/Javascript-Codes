// Question-8
// If water in the filter is less than 1L then more water needs to be filled. 
// If the water quantity is between 1L and 10L then there is no need to fill water. 
// If water is more than 10L then the water will overflow. take user input in a variable named water .


const k=require("readline-sync");
var quantity=k.questionInt("Enter quantity of water in litre: ");
if (quantity<1){
    console.log("More water needs to be filled.");

}else if(quantity>=1 && quantity<=10){
    console.log("There is no need to fill water. ");
}else{
    console.log("Water will overflow.");
}
