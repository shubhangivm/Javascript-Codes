// A promise is a returned object from any asynchronous functio
// It is an object that keep track about whether the certain event has happened already happened or not. Determines what happens after the event has happened.
// They are used to handle asynchronous operations in javascript. 

// Eg=1
// var promise=new Promise(function (resolve,reject){
//     const x="Hello"
//     const y="Hello"
//     if (x==y){
//         resolve()
//     }else{
//         reject()
//     }
// });

// promise.then(function(){
//     console.log("success")
// }).catch(function(){
//     console.log("Some error has occurred.")
// });
// o/p=success

// Eg=2
// const pobj1=new Promise ((resolve,reject)=>{
//     setTimeout(() => {
//         let roll_no=[1,2,3,4,5]
//         resolve(roll_no)
//         // reject("Error while communicating.")
//     }, 2000)
// }).then((roll_no)=>{
//     console.log(roll_no)
// }).catch((error)=>{
//     console.log(error)
// });


// Eg=3
console.log("start")
function getName(name) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("Inside Name setTimOut.")
            resolve(name)
        }, 2000);
    })
}
function getHobbies(name) {

    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log(name)
            console.log("Inside Hobbies setTimeout")
            resolve(['cricket','Reading','dancing'])
        }, 2000);
    })
}
getName('sonam').then(nm=>getHobbies(nm)).then(hobby=>console.log(hobby))

