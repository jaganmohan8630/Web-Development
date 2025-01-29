// console.log("boxes");
// let boxes=document.getElementsByClassName("box");
// console.log(boxes);

// boxes[1].style.backgroundColor="lightyellow";
// boxes[4].style.backgroundColor="lightgreen";

// document.getElementById("redbox").style.backgroundColor="red";

// document.querySelector(".box").style.backgroundColor="lightblue";   

console.log(document.querySelectorAll(".box"));

document.querySelectorAll(".box").forEach(e=>{
    console.log(e);
    e.style.backgroundColor="lightblue";
})

// console.log(document.getElementsByTagName("div"))

// document.querySelectorAll(".box").forEach(e=>{
//     e.matches("redbox");
// })
e=document.getElementsByClassName("box");
console.log(e[3].matches(".redbox"));
console.log(e[3].closest(".container"));