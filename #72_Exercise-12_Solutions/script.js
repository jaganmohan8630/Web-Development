let boxes=document.getElementsByClassName("box");
console.log(boxes);

function getrandomcolor(){
    let c1=Math.floor(Math.random()*255);
    let c2=Math.floor(Math.random()*255);
    let c3=Math.floor(Math.random()*255);
    return `rgb(${c1},${c2},${c3})`;
}
Array.from(boxes).forEach((box)=>{
    box.style.backgroundColor=getrandomcolor();
    box.style.color=getrandomcolor();
})