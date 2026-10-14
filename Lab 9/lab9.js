// User Input

function username() { // Asks user for their name and greets them
    let name = prompt("What is your name?");
    console.log("Hello, " + name);
}
username();

// Numbers

function addNumbers(a, b) {// adds two number together
    return (a + b);
}
let total = addNumbers(4, 6);
console.log("The total is: " + total);
addNumbers(4, 6);


function subtractNumbers(a, b) { // Subtracts two numbers, but instead of using return we print the result
    console.log(a - b);
}
subtractNumbers(10, 4); 

//Area of a BEEEG Square

function calculateArea(length, width) { // Calculates the area of a square, it can be done with any number, I just chose big numbers
    return (length * width);
}  
let area = calculateArea(50, 100);
console.log("The area is: " + area);
calculateArea(50, 100);