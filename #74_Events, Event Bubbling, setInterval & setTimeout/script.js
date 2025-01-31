let button = document.getElementById("btn");

// List of all mouse events 
// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events

// take action when button is double clicked change "click"  to "dblclick"
button.addEventListener("click",()=>{
    alert("I was clicked");
    document.querySelector(".box").innerHTML = "You were clicked";
});

button.addEventListener("contextmenu",()=>{
    alert("Right clicked");
    document.querySelector(".box").innerHTML = "You were clicked(right click)";
});
document.addEventListener("keydown",(e)=>{
    console.log(e.key,e.keyCode);
});

