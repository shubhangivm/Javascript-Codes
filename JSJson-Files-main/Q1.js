const fs=require("fs")




const obj=[{name:"shubhangi mhetre",profile:{hobbies:"coding",gender: "female"}},{name:"Priyanka sharma",profile:{hobbies:"coding",gender: "female"}},{name:"Pinki sharma",profile:{hobbies:"coding",gender: "female"}},{name:"Rinki sharma",profile:{hobbies:"coding",gender: "female}"}},{"name":"Yogita mhetre",profile:{a:"f",b:"g"}}]
fs.writeFileSync("Biodata.json",JSON.stringify(obj,null,4))
var d=fs.readFileSync("Biodata.json")
var data=JSON.parse(d)
// console.log(data)



const k=require("readline-sync")
var user_input=k.question("Enter a word to search: ")
// function isname(value){
    
//     if (value["name"].includes("sharma")){
//         return value
//     }
// }
var filtered=data.filter(a=>a.name.includes(user_input))
console.log(filtered);