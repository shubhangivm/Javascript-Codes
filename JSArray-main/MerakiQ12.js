// Question12
// Given two arrays, find which numbers are not present in the second array.
var list1 = [1,2,3,4,5,6]
var list2 = [2,3,1,0,6,7]
list3=[]
for (var i in list1){
    if(!list2.includes(list1[i])){
        list3.push(list1[i])
    }
}
console.log(list3)