const colors = {
    c1: "red",
    c2: "blue",
    c3: "green",
    c4: "yellow",
    c5: "orange",
    c6: "purple",
    c7: "pink",
    c8: "black",
    c9: "brown",
    c10: "grey"
};
console.log(colors);

// not able to complete the task  

let arr = document.getElementsByClassName("box");
for (let i = 0; i < 5; i++) {
    let boxcolor = 'c' + Math.floor(Math.random() * 10 + 1);
    arr[i].style.backgroundColor = colors[boxcolor];
} 