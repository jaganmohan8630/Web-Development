console.log("This is a promise tutorial");

let prom1 = new Promise((resolve,reject) => {
    let a=Math.random();
    if(a<0.5){
        reject("No random number was supporting you");
    }
    else{

        setTimeout(() => {
            console.log("yes I am done");
            resolve("Jagan");
        }, 1000);
    }
    // prom1.then((name) => {
    //     console.log(name);
    // }).catch((err) => {
    //     console.log(err);
    // });
});
let prom2 = new Promise((resolve,reject) => {
    let a=Math.random();
    if(a<0.5){
        reject("No random number was supporting you 2");
    }
    else{

        setTimeout(() => {
            console.log("yes I am done 2");
            resolve("Jagan 2");
        }, 1000);
    }
});

let p3 = Promise.all([prom1,prom2]);
p3.then((a)=>{
    console.log(a);
}).catch((err)=>{
    console.log(err);
});