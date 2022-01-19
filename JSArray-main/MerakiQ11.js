// Question11
// Palindrome is the string or number if we reverse it will be same as number or string.
// Example:
// MOM
// MALAYALAM
// 121
// 2002
// Sample Input :
// var name=[‘m’,’a’,’l’,’a’,’y’,’a’,’l’,’a’,’m’]
// sample output:
// This is palindrome

// var n=['m','a','l','a','y','a','l','a','m']
// var n=[2,0,0,2]
n2=[]
var c=0
for (let i=n.length-1; i>=0;i--){
    n2.push(n[i])
}
// console.log(n2)
for (i in n){
    if (n[i]===n2[i]){
        c=c+1
    }
}
// console.log(c,n2.length)
if (c===n2.length){
    console.log("It is palindrome")
}else{
    console.log("It is not a palindrome.")
}