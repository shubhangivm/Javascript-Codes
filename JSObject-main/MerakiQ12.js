// Question-12
// Count the values of an object property; mostly they contain lists as values.
// Input :-
// var dict = {
// 'Alex': ['subj1', 'subj2', 'subj3'],
// 'David': ['subj1', 'subj2']
// }
// Output :-
// total count:5

var dict = {
    'Alex': ['subj1', 'subj2', 'subj3'],
    'David': ['subj1', 'subj2']
    }
var c=0
for (i in dict){
    for ( j in dict[i]){
        c=c+1
    }
}
console.log("total count"+ c)