// Template literals are the string literals and





// Eg=1
    // function TaggedLiteral(str) {   
    //     console.log(str);   
    // }   
        
    // TaggedLiteral `Hello World`;
    // o/p= [ 'Hello World' ]

// Eg=2
    function TaggedLiteral(str, val1, val2) {   
        console.log(str);   
        // console.log(val1+"    "+val2);   
    }   
        
    let text = 'Hello World';   
    TaggedLiteral`Colors ${text} ${10+30}`;  
    // // o/p=[ 'Colors ', ' ', '' ]
    // // Hello World    40

// // Eg=3
//     var rawText = String.raw`Hello \n World \n Welcome back! `   
//     console.log(rawText)  
//     // o/p= Hello \n World \n Welcome back!


// function TaggedLiteral(str,a) {   
//     console.log(str);   
//     console.log(a);
// }   
    
// TaggedLiteral `Hello World ${7+7}`;  

