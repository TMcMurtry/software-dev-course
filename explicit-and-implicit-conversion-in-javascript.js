/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


let result = Number("5") - 2;
console.log("The result is: " + result);

/*This code seems to actually run fine due to implicit conversion,
 but I still added the number function to make it look more smooth */

let isValid = Boolean("true");
if (isValid) {
    console.log("This is valid!");
}

/* To make the statement true and read well it should say true,
 if it was meant to be false the field inside the quotes in the boolean function should be empty */

let age = "25";
let totalAge = Number(age) + 5;
console.log("Total Age: " + totalAge);

/* This error is due to the fact that in a concatenation with a string and a number, 
the implicit conversion turns it all to string. */

/* Explicit type conversion */

let ageTim = 31;
let myName = "Tim";
let greetingTim = "Hello, my name is " + myName + " and I am " + String(ageTim) + " years old.";

console.log(greetingTim);

/* Implicit type conversion */

let trueStatement = "5";
if (trueStatement == 5) {
  console.log("This is true.")
}

