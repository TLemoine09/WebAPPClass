//Loops are used to repeat code multiple times. Without duplicating code.
//The while loop
//while (condition) {
    //code to run repeatedly as long as the condition is true
    //infinite loops make sure something inside changes the condition
//Program counting 1-5
 //let count = 0;//Starting point
 //while (count <= 5) {//checks condition, if true everything in the bracket will run
   // console.log("Count is: " + count);
    //count++;
 //}

 //for loop
 //for(initialization; condition; final-expression) {
//repeated code

 //for(let i = 1; i <=5; i++){
//console.log("i is: " + i);
  // let i = 1, is our starting point
  // i <= 5, means to stop when greater than 5
  //i++ counting by 1
  //why for loops are cleaner: All loop logic is in one line.

//User input program that lets the user pick a number to count to
//let num=Number(prompt("Pick a number:"));
//for (let i = 1; i <= num; i++){
//    console.log("i is: " + i);
//}



//Patterns
//classic triangle loop pattern
//let triangle = "";
//for (let line =1; line <= 7; line++){
  //  triangle +="*";
  //  console.log(triangle);
//}

for( let i =1; i <=10; i++){ //The loop works by starting at 1 and then stops at 10. i++ adds a new number each line until it hits 10
    console.log("i is: " + i);
}

 let num=Number(prompt("Pick a number, any number:")); // This one is prompt based. It askes the user to submit a prompt to run
 for (let i = 1; i <= num; i++){
    console.log("i is: " + i);
 }

 let triangle = "";
 for (let line =1; line <= 20; line++){ // The loop builds the pattern by starting out from and then on each new line adds another *. I believe its based on the code below this line
    triangle +="*";// this one
    console.log(triangle);

 }
