// // Operator
// // Q1. Arithmatic Operator
// var x = 10, y = 20;
// console.log(x + y);
// console.log(y - x);
// console.log(x * y);
// console.log(y / x);
// console.log(x % 2);
// console.log(x++);
// // O/p=30
// // 10
// // 200
// // 2
// // 0
// // 10


// // Q2. Comparison operator
// var a = 5, b = 10, c = "5";
// var x = a;
// console.log(a === c);
// console.log(a == c);
// console.log(a == x);
// console.log(a != b);
// console.log(a > b);
// console.log(a < b);
// console.log(a >= b);
// console.log(a <= b);
// console.log(a >= c);
// console.log(a <= c);
// // o/p=false
// // true
// // true
// // true
// // false
// // true
// // false
// // true
// // true
// // true


// // Q3. Assignment operator
// var x = 5, y = 10, z = 15;
// console.log(x = y);
// console.log( x+= 1);
// console.log(x -= 1);
// console.log(x *= 5);
// console.log(x/= 5);
// console.log(x %= 2);
// // o/p=10
// // 11
// // 10
// // 50
// // 10
// // 0

// // Q4. Logical operator
// var a = 5, b = 10;
// console.log((a != b) && (a < b));
// console.log((a > b) || (a == b));
// console.log((a < b) || (a == b));
// console.log(!(a < b));
// console.log(!(a > b));
// // o/p=true
// // false
// // true
// // false
// // true

// // 4. Operations on primitive data type

// // Operations on Strings
// // Finding the length of a string
// // To find the length of a string you just need to use a simple property called length.
// let browserType = 'mozi lla';
// console.log(browserType.length); // output 8

// // Retrieving a specific string character
// let browserType = 'mozilla';
// browserType[0]; // output ‘m’

// let browserType = 'mozilla';
// browserType[browserType.length-1]; // output ‘a’

// // Finding a substring inside a string and extracting it
// let browserType = 'mozilla is a company';
// browserType.indexOf('company'); // output 13


// let browserType = 'mozilla is a company';
// browserType.indexOf('are'); // output -1
// // This should give you a result of -1 — this is returned when the substring, in this case 'are', is not found in the main string.


// // Changing case
// let radData = 'My NaMe Is MuD';
// radData.toLowerCase();  // output ‘my name is mud’
// radData.toUpperCase();  // output ‘MY NAME IS MUD’
// // The string methods toLowerCase() and toUpperCase() take a string and convert all the characters to lower- or uppercase, respectively.
