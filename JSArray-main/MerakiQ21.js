// Question21
// Remove the duplicates and put them in a separate list
var n = [19, 17, 12, 17, 17, 18, 10, 17, 14, 12, 19, 17, 12, 13, 11]
list2=[]
c=0
for ( i of n){
    c=0
    for ( j of n){
        if (i===j){
            c=c+1
            }
    }    
    if (c>1){
        if (!list2.includes(i)){
            list2.push(i)  
        }
        // list2.push(i)
    }

}
console.log(list2)