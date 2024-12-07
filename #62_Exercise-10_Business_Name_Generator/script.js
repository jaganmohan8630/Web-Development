/* Create a business name generator by combining list of adjectives and shop name and another word

Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub
*/

let a = Math.floor(Math.random()*3 + 1);
let b = Math.floor(Math.random()*3 + 1);
let c = Math.floor(Math.random()*3 + 1);
let g = Math.floor(Math.random()*3 + 1);
console.log(g)

// Solution-1

// var adj;
// var sn;
// var aw;

// if(a==1){
//     adj = "Crazy ";
// }
// else if(a==2) {
//     adj = "Amazing ";
// }
// else {
//     adj = "Fire ";
// }

// if(b==1){
//     sn = "Engine ";
// }
// else if(b==2) {
//     sn = "Foods ";
// }
// else {
//     sn = "Garments ";
// }

// if(c==1){
//     aw = "Bros";
// }
// else if(c==2) {
//     aw = "Limited";
// }
// else {
//     aw = "Hub";
// }

// console.log(adj + sn + aw);

// Solution-2

let adj = {
    1:"Crazy",
    2:"Amazing",
    3:"Fire"
}
let sn = {
    1:"Engine",
    2:"Foods",
    3:"Garments"
}
let aw = {
    1:"Bros",
    2:"Limited",
    3:"Hub"
}
console.log(adj[a]+ " " + sn[b] + " " + aw[c])
console.log("har\"".length)