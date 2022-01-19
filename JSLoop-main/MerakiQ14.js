// Question14
// Try to print this pattern
// 5 5 5 5 5
// 4 4 4 4 4
// 3 3 3 3 3
// 2 2 2 2 2
// 1 1 1 1 1

var str=""
for (var i=1;i<6;i++){
    for (var j=5;j>0;j--){
        str+=j+" "
    }
    str+="\n"
}
console.log(str)