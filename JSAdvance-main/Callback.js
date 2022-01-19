// Any function that is passed as an argument is called a callback function.
// callback is nothing but functions that take time to produce a result.


// Eg1
// function show() {
//     console.log("I am show function")
// }
// function show2(callback){
//     callback()
// }
// show2(show)  //this show function is callback function because this is passed as an argument.


// Eg2
// function show2(callback){
//     var a=101
//     callback(a)
// }
// show2(function show(a) {
//     console.log("I am show function "+a)        // in this example we can function directly as an argument.
// })



// Eg3
// function show2(callback) {
//     var a=101
//     callback(a)
// }
// show2((a)=> console.log("I am show function "+a))




// Synchronous and asynchronous callback.

// // Eg4 synchronous callback function -blocking functions; 
// // the higher order functions doesn't complete its execution until tha callback is done executing.
// console.log("start")
// function callbackTeaser(callback,bio) { // callBackTeaser is Higher order function because it receives an function as parameter and returns a function as a value.
//     console.log("In Higher order function: ")
//     callback(bio)
//     console.log("Higher order function last statement.")
// }
// function consolebio(Person){ // consolebio is callback function because it is passed as argument to another function.
//     if (Person){
//         console.log("In callback function: ")
//         console.log(` Hi!, my name is ${Person.name}, I am ${Person.job} & super excited about ${Person.hobby}`)
//         console.log("Callback function done executing...")
//     }
// }
// callbackTeaser(consolebio,{'name':'shubhangi','job':'coder','hobby':'Learning new technologies.'})
// console.log("End")

// // o/p=start
// // In Higher order function: 
// // In callback function: 
// //  Hi!, my name is shubhangi, I am coder & super excited about Learning new technologies.
// // Callback function done executing...
// // Higher order function last statement.
// // End


// Eg5 Asynchronous callback function - Non-blocking function 
//  Higher order function completes its execution waiting for the callback. callback is executed after higher order function.

console.log("start")
function callbackTeaser(callback,bio) { // callBackTeaser is Higher order function because it receives an function as parameter and returns a function as a value.
    console.log("In Higher order function: ")
    setTimeout(() => {
        callback(bio)
    }, 3000);
    // callback(bio)
    console.log("Higher order function last statement.")
}
function consolebio(Person){ // consolebio is callback function because it is passed as argument to another function.
        console.log("In callback function: ")
        console.log(` Hi!, my name is ${Person.name}, I am ${Person.job} & super excited about ${Person.hobby}`)
        console.log("Callback function done executing...")
}
callbackTeaser(consolebio,{'name':'shubhangi','job':'coder','hobby':'Learning new technologies.'})
console.log("End")







// console.log("Start")
// function CallerFunc(callback,Person) {
//     console.log("In higher order function: ")
//     setTimeout(() => {
//         callback(Person)
//     }, 3000);
//     // callback(Person)
//     console.log("Higher order function last statement.")
// }



// function consolebio(Person){
//     console.log("In callback function:")
//     console.log(`Hi!, I am ${Person.name}. I am ${Person.job}. very much excited to learn ${Person.hobby}.`)
//     console.log("Callback function ends.")
    
// }
// CallerFunc(consolebio,{'name':'shubhangi','job':'coder','hobby':'new technologies'})
