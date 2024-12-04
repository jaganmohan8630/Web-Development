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
let random = Math.random();
console.log(random);
let a = prompt("Enter a");
let b = prompt("Enter operator");
let c = prompt("Enter b");

let obj ={
    "+" : "-",
    "*" : "+",
    "-" : "/",
    "/" : "**"
}
if(random > 0.1){
    //correct calculator
    alert(`The result is ${eval(`${a} ${b} ${c}`)}`)
}
else{
    //incorrect calculator
    b=obj[b];
    alert(`The Result is ${eval(`${a} ${b} ${c}`)}`)
}