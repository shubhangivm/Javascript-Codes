// Question-9
// Take 1 list and have some objects inside it as sample data given below, 
// and create a new list with unique values and console the unique values list.
// Example :
// Input :
// [ {"first":"1"}, {"second": "2"}, {"third": "1"}, {"four": "5"}, {"five":"5"}, {"six":"9"}, {"seven":"7"} ]
// Output :-
// [2', '7', '9', '5', '1']


var list1= [ {"first":"1"}, {"second": "2"}, {"third": "1"}, {"four": "5"}, {"five":"5"}, {"six":"9"}, {"seven":"7"} ]
var list2=[]
for (i of list1){
    for (j in i){       
        if (!list2.includes(i[j])){
            list2.push(i[j])
        }
    }
}
console.log(list2)