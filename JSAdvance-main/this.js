function getName(name){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            // console.log(name)
            resolve(name)
        },2000)
    })
}
function gethobby(name) {
    return new Promise((resolve,reject)=>{ 
        // console.log(name)
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
m()