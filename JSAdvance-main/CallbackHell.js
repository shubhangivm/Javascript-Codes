// callback Hell is a big issue caused by coding with complex nested callbacks.
//  here each and every callback takes an argument that is result of previous callbacks.
//  In this manner the code structure looks like pyramid, making it difficult to read and maintain. 
//  Also if there is an error in one function another function gets affected



// const getRollno=()=>{
//     setTimeout(()=>{
//         console.log("API getting roll no: ")
//         let roll_no=[1,2,3,4,5]
//         console.log(roll_no)
//         setTimeout((roll_no)=>{
//             const biodata={
//                 name:'shubhangi',
//                 age:22
//             }
//             console.log(`my roll number is ${roll_no}. My name is ${biodata.name}. My age is ${biodata.age}.`)
//             setTimeout(()=>{
//                 biodata.gender="female"
//                 console.log(`my gender is ${biodata.gender}`)
//             },2000)
//         },2000,roll_no[1])
//     },2000)
// } 
// getRollno()


const consolevalue=()=>{

    setTimeout(() => {
        console.log("inside first settimeout.")
        value1=10
        setTimeout((value1) => {
            console.log('inside second settimeout.')
            console.log(value1+10)
            
            setTimeout(() => {
                console.log("Inside third settimout.")
                console.log(value1+20)
            }, 2000,value1);
            
        }, 2000,value1);


    }, 2000);
    

}
consolevalue()