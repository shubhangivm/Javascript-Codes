// Question-21
// Write a function that takes 2 strings as parameters and prints whose length is bigger,
//  if both lengths are equal print two strings.
// Hint :Use len() builtin function.
// Input:
// is_equal_lenth(“hello”,”welcome”)
// is_equal_lenth(“sonu”,”monu”)
// Output :
// welcome
// sonu
// Monu
function is_equal_length(str1,str2) {
    if (str1.length>str2.length){
    console.log(str1)
    }else if (str1.length===str2.length){
        console.log("both are of same length. "+str1,str2)
    }
    else{
        console.log(str2)
    }
}
is_equal_length('hello','welcome')
is_equal_length('sonu','monu')