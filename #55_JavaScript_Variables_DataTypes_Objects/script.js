console.log("Hello...");

var a=5;
a=a+1;
let b=15;
var _a="Mohan"
// var 55a="hello" not allowed
var c ="Jagan";
console.log(a + b + 8);
console.log(typeof a,typeof b,typeof c);
const d=9;
// d = d+5; not allowed as it is a constant
console.log(d);


// difference between var and let
{
    var a=45;
    console.log(a);
}
console.log(a);
{
    let b=25;
    console.log(b);
}
console.log(b);

let x="Jagan Mohan";
let y=22;
let z=3.55;
const p=true;
let q=undefined;
let r=null;
let j=BigInt
console.log(x,y,z,p,q,r);
console.log(typeof x,typeof y,typeof z,typeof p,typeof q,typeof r);

var o={
    name: "Jagan Mohan",
    "job code": "5500",
    is_handsome:true
}
console.log(o);
o.salary="1 crore"
console.log(o);
o.salary="5 crore"
console.log(o);
console.log(typeof o);