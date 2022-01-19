// async makes a function return a promise.
// await makes a function wait for a minute.


// Eg=1
// console.log("Start")
// function getName(name) {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             // console.log(name)
//             console.log("Inside Name settimout.")
//             resolve(name)
//         },2000);
//     })
// }

// function getHobbies(name) {
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("Inside hobbies settimeout.")
//             console.log(name)
//             resolve(['Cricket','Reading','Dancing'])
//         },1000)
//     })
// }

// async function showhobby() {
//     const nm=await getName('sonam')
//     const hobby=await getHobbies(nm)
//     console.log(hobby)
// }
// showhobby()
// console.log('End')



// Eg=2
// console.log("This is Async & Await.")

// const arr=[1,2,3,4]
// const value=arr.map(n => n**2)
// console.log(value)



// console.log("10"-3+4)
// console.log(10+"3"+4)
// console.log(10+3+"4")
// console.log(10+1+"0");


// const input=require("readline-sync")
// var number=input.question("Enter a number: ")
// console.log(number)
// if (number<10){
//     console.log("Less than 10")
// }else{
//     console.log("Greater than 10")
// }

// const dict={"8":7,"9":10,"8":10}
// console.log(dict)


function getName(name){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(name)
        },2000)
    })
}
function gethobby(name) {
    return new Promise((resolve,reject)=>{ 
        console.log(name)
        setTimeout(() => {
            resolve ['cricket','coding']
        }, 1000);
    })

}
async function m() {
    var name=await getName('shubh')
    var hobby=await gethobby(name)
    console.log(hobby)
}
