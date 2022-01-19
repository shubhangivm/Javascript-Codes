// Question-10

// You need to write a function named students where it will take marks of students in a list
//  and tell how many students have more than 20 marks. For checking if the number is greater than 20 
//  or not you will write one more function named isGreaterThen20 and compare and give the result.




arr=[10,30,40,50,60]
function students(arr) {
let count=0
    for (i of arr){

        function isgreaterthan20(marks) {
        return (marks>=20)
        }
    
        var x=isgreaterthan20(i)
    
        if (x==true){
            count+=1

        }
    } return count
    
}count=students(arr)
console.log("Count of students having marks greater than 20 "+ count)