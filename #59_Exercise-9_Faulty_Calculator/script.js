/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **

It performs wrong operation 10% of the times
*/
let a = parseFloat(prompt("Enter a"));
let b = parseFloat(prompt("Enter b"));
let r = Math.random() < 0.1;
if(r){
    console.log("wrong");
    console.log("a + b is",a-b);
    console.log("a x b is",a+b);
    console.log("a - b is",a/b);
    console.log("a/b is",a**b);
}
else{
    console.log("a + b is",a + b);
    console.log("a x b is",a*b);
    console.log("a - b is",a-b);
    console.log("a/b is",a**b);
}

// Faulty Calculator

// let a = parseFloat(prompt("Enter the first number (a):"));
// let b = parseFloat(prompt("Enter the second number (b):"));

// // Determine whether to perform faulty operations (10% chance)
// let isFaulty = Math.random() < 0.1;

// if (isFaulty) {
//     console.log("Faulty Mode Activated!");
//     console.log("a + b (actually performs subtraction):", a - b);
//     console.log("a * b (actually performs addition):", a + b);
//     console.log("a - b (actually performs division):", a / b);
//     console.log("a / b (actually performs exponentiation):", a ** b);
// } else {
//     console.log("Normal Mode Activated!");
//     console.log("a + b:", a + b);
//     console.log("a * b:", a * b);
//     console.log("a - b:", a - b);
//     console.log("a / b:", a / b);
// }
