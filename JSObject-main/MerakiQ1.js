// Question-1
// Write a Python program to combine two dictionary adding values for common keys.
let d1 = {'a': 100, 'b': 200, 'c':300}
let d2 = {'a': 300, 'b': 200, 'd':400}
// output should be this: {'a': 400, 'b': 400, 'd': 400, 'c': 300}

// let d3={
//     ...d1,
//     ...d2
//     }
// console.log(d3)
var d3={}
var d4={}
for (i in d1){
    for (j in d2){
        if (i===j){
            
            d4[i]=d1[i]+d2[j]
            break
            
        }else{
            d3[i]=d1[i]
            d3[j]=d2[j]
        }
        
    }
}
for (i in d4){
    d3[i]=d4[i]
}
console.log(d3)


// console.log(d1);
// for (i in d1){
//     for (j in d2){
      
//             if (i!=j){
//                 d1[j]=d2[j]
    
//             }
        
//     }
// }
// console.log(d1)
    
