let arr = [1,5,6,8,9];
let arr1 = [10,6,8,9];
let arr2 = [1,5,6,9];
let arr3 = [1,6,4,3];

console.log(typeof(arr))

console.log(arr);
console.log(arr.length);
console.log(arr[0]);
arr[0] = 565;
console.log(arr[0]);

console.log(arr.toString())

console.log(arr.join(" and "))

arr.pop()
console.log(arr);

arr.push(100)
arr.push("Mohan")
console.log(arr);

arr.shift()
console.log(arr);

arr.unshift("Jagan")
console.log(arr);

delete arr[1]
console.log(arr);
console.log(arr.length);

console.log(arr1.concat(arr2,arr3));

// #special case
// Why Use (a, b) => a - b:
// The comparator function (a, b) => a - b ensures that the sort() method sorts numbers numerically rather than 
// lexicographically.(i.e alphabetically based on their Unicode values). This behavior can cause unexpected results when sorting numbers.)

// How It Works:
// The sort() method accepts a comparator function that defines the sorting order.
// For each pair of elements (a, b), the comparator function calculates a value:
// If the result is negative, a comes before b.
// If the result is positive, b comes before a.
// If the result is zero, the order remains unchanged.
arr1.sort((a, b) => a - b);
console.log(arr1);

console.log(arr3.sort()); 


let arr4 = [5,9,7,3,2,4]
// arr4.splice(index position, number of elements to delete at that index,numbers you want to add)
arr4.splice(2,2,45,65,75)
console.log(arr4)

console.log(arr4.slice(1,4))

console.log(arr4.reverse())
