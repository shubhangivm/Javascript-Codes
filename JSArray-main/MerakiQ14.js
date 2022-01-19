// Question14
// How to find all pairs in an array of integers whose sum is equal to the given number?
// Sample Input:
// var number = 30
// var n = [10, 11, 12, 13, 14, 17, 18, 19]
// Sample Output:
// [ [ 11, 19 ], [ 12, 18 ], [ 13, 17 ], [ 17, 13 ], [ 18, 12 ], [ 19, 11 ] ]

var n = [10, 11, 12, 13, 14, 17, 18, 19]
var list2=[]
for (let i=0;i<n.length;i++){
    var l2=[]
    for (let j=0;j<n.length;j++){
        if (n[i]+n[j]==30){
            list2.push([n[i],n[j]])
        }
        

    }
}
    
console.log(list2)