let titlee = document.getElementsByClassName("title")[0];
let chan = document.getElementsByClassName("channel")[0];
let vie = document.getElementsByClassName("views")[0];
let mo = document.getElementsByClassName("monthsold")[0];
let dur = document.getElementsByClassName("duration")[0];
let img = document.getElementsByClassName("iimmaa")[0];
console.log(img);

function createCard(title, cName, views, monthsOld,duration,thumbnail){
    // Finish this function
    let viewss=Math.floor(views/1000);
    titlee.innerHTML = title;
    chan.innerHTML = cName;
    vie.innerHTML = viewss + " k views";
    mo.innerHTML = monthsOld + " months ago";
    dur.innerHTML = duration;
    img.src = thumbnail;
}

createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 9, "40:00","image.png");