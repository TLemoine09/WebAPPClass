//Do not link this JS file to your html, this is a stand alone file

// 1. Concept (5 pts): Why do we use Number(prompt()) instead of just prompt() when doing math or numeric comparisons?


//Number (prompt()) is used to convert string input into number data type so that we can perform mathematical operations


// 2. Operators (10 pts): In one sentence each, explain the difference between:

// == vs ===

// = checks for equality of value, while === checks for equality of both value and data type

// > vs >=

// > checks if the left value is greater than the right value, while >= checks if the left value is greater than or equal to the right value



// Part_C 3: Broken code — explain changes in comments, then rewrite correctly below

// The original code has been commented out so I can write the code.
// I sectioned it off so its easiere to spot the different codes.



//let score = prompt("Score?");
//if (score >= "90") {
//  console.log("A");
//} else if (score == "80") {
//  console.log("B");
//} else {
//  console.log("Keep going")
//}


// Write the working version of the above code below: 

let score = Number(prompt("Score?")); // Convert input to number for proper comparison
if (score >= 90) { // Remove quotes to compare as numbers
    console.log("A");
} else if (score >= 80) {
    console.log("B");3
} else {
    console.log("Keep going");
}

