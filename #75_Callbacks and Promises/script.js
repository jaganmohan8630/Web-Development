console.log("Jagan is a Hacker");
console.log("Tarun is a Hacker");

setTimeout(() => {
    console.log("I am inside setTimeout");
    },   0);

console.log("The beggining of the end");




const fn = () => {
    console.log("Nothing");
}
const callback = (name) => {
    console.log(name);
    fn();
    }

const loadscript = (src,callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("Jagan");
    document.head.append(sc);
}

loadscript("https://amazon.com",callback);