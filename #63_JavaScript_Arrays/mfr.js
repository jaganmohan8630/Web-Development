let arr=[1,13,5,7,11]
let newarr=[]

// Method-1
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    newarr.push(element**2)
}
console.log(newarr)

// Method-2
let newarr2=arr.map((e,index,arr)=>{
    return e**2
})
console.log(newarr2)

let arr2=[1,13,5,7,11]
const greaterthanseven = ((e)=>{
    if(e>7){
        return true
    }
    return false
})
console.log(arr2.filter(greaterthanseven))

let arr3=[1,13,5,7,11]

const add = ((a,b)=>{
    return a+b
})
console.log(arr3.reduce(add))
console.log(Array.from("Jagan"))