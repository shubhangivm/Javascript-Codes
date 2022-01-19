// Question-11
// You need to count the number of occurrences of each unique character of a word "MISSISSIPPI" and 
// store them in an object in key, value pairs.
// Example:-
// Output :-
// {M:1,I:4,S:4,P:2}
var str="MISSISSIPPI" 
var list1=[]
var d={}
for (i of str){
    if (!list1.includes(i)){
        list1.push(i)
        c=0
        for (j of str){
            if (i===j){
                c+=1
            }
        }
        d[i]=c
    }
}
console.log(d)
