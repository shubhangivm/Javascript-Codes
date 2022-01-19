// Question20
// Count of the elements that is repeated in a list.
var char_list = ["a", "n", "t", "a", "a", "t", "n", "n", "a", "x", "u", "g", "a", "x", "a"]

list2=[]
for (var i in char_list){
    if(!list2.includes(char_list[i])){
        list2.push(char_list[i])
    }
}
console.log(list2)
for (j of list2){
    c=0
    for(k of char_list){
        if (j===k){
            c=c+1
        }
    }
    console.log("count of "+j+" is "+c)
}
