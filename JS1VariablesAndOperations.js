/*
  Copyright (c) 2023 Promineo Tech
  Author:  Promineo Tech Academic Team
  Subject:  Variables and Operations Lab
  FE JS1 Lab
*/

/** Key Terms:
 *  JavaScript
 *  GUI (Graphic User Interface)
 *  CLI (Command Line Interface)
 *  Variable
 *  Data Types:
 *   - String
 *   - Number
 *   - Boolean
 *   - Array
 *   - Undefined
 *   - Object
 *   - BigInt
 *   - Null
 *   - Symbol
 *  Method
 *  Git
 *  Source Control
 *  Operators
 *  console.log()
 * 
*/

/* ----------------------------------------------------- */
// Please do not alter the existing code unless instructed to do so. 
// Read the comments and add your code where it is specified for each question. 
/* ----------------------------------------------------- */

/*-------------------------------------------------------*/

console.log(`--------------------------
Question 1. Creating & 'console.log()'ing variables \n`);

/**
 * Instruction: Create a variable for each step, then print that variable 
 *              to the console in the correct section.
 *
 * Step 1: Create a variable to hold the quantity of available seats left on a flight.
 * Step 2: Create a variable to hold the cost of groceries at checkout
 * Step 3: Create a variable to hold a person's middle initial
 * Step 4: Is it Hot Outside?
 *         Create a variable to hold a boolean, true if it's hot outside, false if it's not hot outside.
 * Step 5: Create a variable to hold a customer's first name.
 * Step 6: Create a variable to hold a street address.
 * ↓ YOUR CODE HERE ↓ */

console.log("Step 1:  Number of Seats on a Plane");
let availableSeats = 25;
console.log("The number of seats left on this plane is " + availableSeats + ".");

console.log("Step 2:  Cost of Groceries");
let costOfGroceries = 150.78;
console.log("The cost of groceries is $" + costOfGroceries + ".");

console.log("Step 3:  Middle Initial");
let middleInitial = "L";
console.log("My middle initial is " + middleInitial + ".");

console.log("Step 4:  Is it Hot Outside?");
let isHotOutside = false;
let isNotHotOutside = true;
console.log("Is it hot outside? - " + isHotOutside);

console.log("Step 5:  First Name");
let firstName = "Alice";
console.log("The customer's first name is " + firstName + ".");

console.log("Step 6:  Street Address");
let streetAddress = "123 Main Street";
console.log("The street address is " + streetAddress + ".");

/*-------------------------------------------------------*/

console.log(`--------------------------
Question 2. Creating & 'console.log()'ing variables \n`);
 

/** 
 * Instruction: Use the variables we just created to solve the problems below.
 *              Print your answers to the console.
 * 
 *
 * */

    console.log('Remove Plane Seats:');
//	A customer booked 2 plane seats. Remove 2 seats from the available seats variable
//  ↓ YOUR CODE HERE ↓
    availableSeats -= 2;
    console.log("The remaining seats on this flight after a customer booked 2 is " + availableSeats + ".");

    console.log('Buy a Candy Bar:');
//	Impulse candy bar purchase! Add 2.15 to the grocery total
//  ↓ YOUR CODE HERE ↓
    costOfGroceries += 2.15;
    console.log("The new total after an impulse candy bar purchase is $" + costOfGroceries + ".");

    console.log('Fix a Birth Certificate:');
//	A birth certificate was printed incorrectly, change the middle initial to something else
//  ↓ YOUR CODE HERE ↓
    middleInitial = "C";
    console.log("The corrected birth certificate has a middle initial of " + middleInitial + ".");

    console.log('Changing Seasons: ' + isNotHotOutside);
//	The season has changed, update the hot outside variable	to be opposite of what it was
//  ↓ YOUR CODE HERE ↓
    isHotOutside = true;
    isNotHotOutside = false;
    console.log("The season has changed to summer. Is it hot outside? - " + isHotOutside);
    
    console.log('Full Name:');
//	Create a new variable called full name using the customer's
//  first name, the middle initial, and a last name of your choice
//  ↓ YOUR CODE HERE ↓
    let fullName = firstName + " " + middleInitial + "." + " " + "Sullivan";
    console.log("The customer's full name is " + fullName + ".");

    console.log('Introduce a Customer:');
//	Print a line to the console that introduces the customer 
//	including the name, and saying that they live at the address variable
//  ↓ YOUR CODE HERE ↓
    let introduction = "Hello! My name is " + fullName + " and I live at " + streetAddress + ". It's nice to meet you!";
    console.log(introduction);


    console.log('-----------Finished------------')