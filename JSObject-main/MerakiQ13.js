// Question-13
// Write a programme to find the 3 maximum values of an object and print them.
// Input :-
// var my_dict = { 'a':50, 'b':58, 'c':56, 'd':40, 'e':100, 'f':20 }
// Output :-
// [58,56,100]

var my_dict = { 'a':50, 'b':58, 'c':56, 'd':40, 'e':100, 'f':20 }
var list1=[]
for (let i=0;i<3;i++){
    var max=0
    for (j in my_dict){
        if (my_dict[j]>max){
            max=my_dict[j]
            key=j        }
    }
    list1.push(max)
    delete my_dict[key]
}
console.log(list1)