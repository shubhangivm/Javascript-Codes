// let pw="Shubhu7171"
// let l=[0,0,0,0]
// for ( i of pw){
//     // console.log(i)
//     let spl='!@#$%^&*()-+';
//     if (!isNaN(i* 1)){
//         l[0]=1
//     }else if (!(!spl.includes(i))){
//         console.log(i)
//         l[3]=1
//     }
//     else if (i==i.toUpperCase()){
//         l[1]=1
//     }else if (i==i.toLowerCase()){
//         l[2]=1
//     }
//     // else if (!(!spl.includes(i))){
//     //     console.log(i)
//     //     l[3]=1
//     // }
// }
// let sum=0
// for (i in l){
//     console.log(l[i])
//     sum+=l[i]
// }
// console.log("sum",sum)

// // !isNaN(character * 1)){
// //     alert('character is numeric')
// // let spl='!@#$%^&*()-+';
// // var i="@"
// // if (!(!spl.includes(i))){
// //     console.log("true")
// // }


// const k=require("fs")
// const { pathToFileURL } = require("url")

// var filename="userdetails.json";
// if (fs.existsSync(filename)){
//     console.log("true")
// }


// var d={"Shubhu@7171":{"Username":"Shubhangi","Password":"Shubhu@7171","Profile":{"Description: ":"s","Birthdate: ":"d","Hobbies: ":"f","Gender":"g"}}}
const f=require("fs")
var p=f.existsSync("userdetails.json")
console.log(p)