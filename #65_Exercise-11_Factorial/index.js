let n = prompt("Enter n");

var j=1;
for(let i=n;i>0;i--){
    j*=i
}
console.log(j)

let g=9
function factorial(number){
    let arr=Array.from(Array(number+1).keys())
    console.log(arr.slice(1))
    let c = arr.slice(1).reduce((a,b)=>{
        return a*b
    })
    console.log(c)
}
factorial(g)