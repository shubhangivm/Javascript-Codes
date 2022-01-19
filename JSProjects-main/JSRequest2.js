const axios=require("axios")
const fs=require("fs")
const input=require("readline-sync")
async function makeGetRequest() {
   let res=await axios.get("https://api.merakilearn.org/courses")
    let data = res.data;
    // console.log(data);
    fs.writeFileSync("Request.json",JSON.stringify(data,null,4))

    return data
}
data=makeGetRequest();
// console.log(data)se_details-1]["id"]

function fun(){
  
    buf=fs.readFileSync("Request.json")
    dataread=JSON.parse(buf)
    console.log(dataread)
    var c=0
    for (i of dataread){
        for (j in i){
            if (j=='name'){
            c=c+1
            console.log(c+' '+i['name']+' '+i['id'])
            }
        }
    }
    course_details=input.questionInt("Select the course option number you want? : ")
    console.log("You selected course: ")
    console.log(dataread[course_details-1]["name"])
    user1=dataread[course_details-1]["id"]
    // user1=dataread[course_details-1]["id"]


    Ask_user1=input.question("Please enter n for next page and p for previous page: ")  
    if  (Ask_user1=="n"){
            async function  makeGetRequest2() {
                let res2=await axios.get("https://api.merakilearn.org/courses/"+String(user1)+"/exercises")
                data2=res2.data
                fs.writeFileSync("Request2.json",JSON.stringify(data2,null,4))
            }
            makeGetRequest2()
        
        buf2=fs.readFileSync("Request2.json")
        dataread2=JSON.parse(buf2)
        function fun3(data2){
            var c3=0
            var c4=0
            var m=""
            for (l of data2["course"]["exercises"]){
                // console.log(l)

                if (l["parent_exercise_id"]== null){
                    c3=c3+1
                    console.log(c3,l["name"],"ID:",l["id"]) 
                    c4=0  

                }else if (l["id"]==l["parent_exercise_id"]){
                    c3=c3+1
                    m=l["parent_exercise_id"] 
                    console.log(c3,l["name"],"ID:",l["id"])
                    c4=0
                }else{
                    c4=c4+1
                    if (m==l["parent_exercise_id"]){
                        console.log(" ",c4,l["name"],"ID:",l["id"])
                    }
                }
            }
        }  fun3(dataread2) 

        Ask_user2=input.questionInt("Select course option no: ")
            var c3=0
            var c4=0
            var m=""
            var list1=[]
            var n=""
            for (l of dataread2["course"]["exercises"]){
                        
                if (l["parent_exercise_id"]== null){
                    c3=c3+1
                    if (Ask_user2==c3){
                        n=l["parent_exercise_id"]
                        console.log(c3,l["name"],"ID:",l["id"])
                        console.log(l["content"]) 
                        break
                            
                    }
                    c4=0                            
                }else if (l["id"]==l["parent_exercise_id"]){
                    c3=c3+1
                    if (Ask_user2==c3){
                        m=l["parent_exercise_id"]
                        console.log(c3,l["name"],"ID:",l["id"])
                    }
                                
                    c4=0
                }else{
                    c4=c4+1
                    if (m==l["parent_exercise_id"]){
                        console.log(" ",c4,l["name"],"ID:",l["id"])
                        list1.push(l["name"])
                    }
                }
            }
        if (list1.length>1){      
            Ask_user3=input.questionInt("Select subtopic option no: ")
            function fun2(Ask_user3){
                for (l of dataread2["course"]["exercises"]){
                    for (i of list1){
                        if (m==l["parent_exercise_id"]){

                            if (l["name"]==list1[Ask_user3-1]){
                                console.log( Ask_user3,l["name"]," ", l['id'])
                                console.log(l["content"])
                                if (Ask_user3<=list1.length-1){
                                    user_input2=input.question("enter n for next and p for previous: ")
                                    if (user_input2=="n"){
                                        Ask_user3+=1
                                        fun2(Ask_user3)                               
                                    }else{
                                        fun()
                                    }
                                }else{
                                    console.log("end page.")
                                }
                                break  
                            }
                        }    
                    }                 
                }
            }fun2(Ask_user3)            
        }else{
            console.log("End page.")

        }


    }else if (Ask_user1=='p'){
        fun()
    }
}
fun()