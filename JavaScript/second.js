// This is a single line comment.
/* It is used for multi line comment.
As you can say.
Today we learn about operator.*/

// Arithmetic Operator
let a = 5;
let b = 2;
console.log("a = ", a, "& b = ", b);
console.log("a + b = ", a + b);
console.log("a - b = ", a - b);
console.log("a * b = ", a * b);
console.log("a / b = ", a / b);
console.log("a % b = ", a % b); // % is Modulus
console.log("a ** b = ", a ** b); // ** is exponentiation

// Unary Operator
a++; // post increment
++a; // pre increment
a--; // post decrement
--a; // pre decrement

// Assignment Operators
/*
These are different Assignment Operator
=, +=, -=, *=, /=, %=, **=
*/
a += 4; // is similar to a = a + 4

// Comparison Operator, It's always return a Boolean Value
console.log("a == b", a == b); // equal to
console.log("a != b", a != b); // not equal to
b = "7"
console.log("a === b", a === b); // equal to & type
console.log("a !== b", a !== b); // not equal to & type
console.log("a < b", a < b)
// >, <=, >=

// Logical Operator
console.log("a && b = ", a || b);
// &&, !

// Conditional Statement
let age = 18;
if (age < 18) {
    console.log("You are junior.");
} else if (age > 60) {
    console.log("You are senior.");
} else {
    console.log("You are adult.");
};

// Ternary Operator
age >= 18 ? console.log("Adult") : console.log("Junior");

// Practice a question
let num = prompt("Enter a number:");
if(num % 5 === 0){
    console.log(num, "is a multiple of 5.");
} else{
    console.log(num, "is not a multiple of 5.");
}