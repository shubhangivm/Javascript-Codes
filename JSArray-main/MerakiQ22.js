// Question22
// var mainStr = "the quick brown fox jumped over the lazy dog. the dog slept over the verandah."
// subStr = "over"
// You need to remove the all occurrences of subStr in mainStr and give the output
// Output: the quick brown fox jumped the lazy dog. The dog slept on the verandah.

var mainStr = "the quick brown fox jumped over the lazy dog. the dog slept over the verandah."
var substr="over"
let l=mainStr.split(" ")

for (i of l){   
    if (i==="over"){
        position=l.indexOf("over")
        l.splice(position,1)
    }    
}
console.log(l)

