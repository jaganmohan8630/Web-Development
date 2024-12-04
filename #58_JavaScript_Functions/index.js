function nice(name) {   
    console.log("Hey " + name +" You are nice!"); //does not prints space between them
    console.log("Hey " + name +" You are good!"); //does not prints space between them
    console.log("Hey " + name +" Your t-shirt is nice!"); //does not prints space between them
}
function sum(a,b,c=5){// c called as default parameter
    console.log(a+b);
    return a+b+c;
}
nice("Jagan Mohan")
nice("")
let r=sum(5,6);
console.log("the sum of a & b is:",r)//prints space between them
let s=sum(5,6,0);//value inside funtion call is considered
console.log("the sum of a & b is:",s)

const func1 = (x)=>{
    console.log("I am an arrow function",x)//--> arrow function
}
func1(44)