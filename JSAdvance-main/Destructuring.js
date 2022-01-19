
// Destructuring is a JavaScript expression that allows us to extract data from arrays, objects,
//  and maps and set them into new, distinct variables. Destructuring allows us to extract multiple properties,
//   or items, from an array​ at a time.

// The right side of the statement contains the Javascript object that we want to split into variables;
//  the left side contains a “pattern” for corresponding properties of the object. 
//  This “pattern” is usually a list of variable names.

// Examples

// 1. Assigning to existing variable names
// var employee = {    // Object we want to destructure
//     firstname: 'Jon',
//     lastname: 'Snow',
//     dateofbirth: '1990'
// };
// // Destructuring the object into our variables
// var { firstname, lastname, dateofbirth } = employee;
// console.log( firstname, lastname, dateofbirth);

// 2. Assigning to new variable names
// The following code destructures the object into variables with a different name than the object property:
// var employee = {    // Object we want to destructure
//     firstname: 'Jon',
//     lastname: 'Snow',
//     dateofbirth: '1990'
// };

// // Destructuring the object into variables with
// // different names than the object variables
// var { firstname: fn, lastname: ln, dateofbirth: dob } = employee;
// console.log( fn, ln, dob);


// 3. Assigning to a variable with default values
// We can also assign default values to variables whose keys may not exist in the object we want to destructure. 
// This will prevent our variable from having an undefined value being assigned to it. The code below demonstrates this:

var employee = {    // Object we want to destructure
    firstname: 'Jon',
    lastname: 'Snow',
    dateofbirth: '1990'
};

// Destructuring the object into variables without 
// assigning default values 
var { firstname, lastname, country } = employee;
console.log("Without setting default values")
console.log( firstname, lastname, country);

// Destructuring the object into variables by 
// assigning default values 
var { firstname, 
      lastname, 
      city = "pune" } = employee;
console.log("\nAfter setting default values")
console.log( firstname, lastname, city);


