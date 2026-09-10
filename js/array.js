// const array=["sushant","ghimire","prasad"]
// array.pop(); // remove last element from the list of array
// array.unshift("prasad"); //insert data at 0 index
// array.shift()// remove the 0 index
// array.push("is a don"); //Add element at last index
// console.log(array);

// console.log(array.length);

// console.log(array.join(" "))

// const string="hello hi tata bye";
// console.log(string.split(" "));
//  let arr =["hello"];
// let arr2= arr.splite();
//  console.log(arr2.reverse());

// const array2 =[
//     {
//         name:"sushant",
//         age:22,
//         email:"sushant@gmailcom"
//     },
//     {
//         name:"sarthak",
//         age:22,
//         email:"sarthak@gmailcom"
//     },
//     "char",
//     true
// ];
// const obj=array2[0];
// delete obj.email;

// console.log(array2[0]);// removed email from array[0]

// const name=["ram","shyam","hari"];
// console.log(name.includes("ram"));

// //map() -> mapis a method that transforms each element of an array
// const array3=[1,2,3,4];
// console.log(array3.map(value =>value*2)); //1st params 2nd index


const test =["sushant"];
console.log(test)
let a = test.join();
console.log(a);
let split = a.split(""); // converts string to array
console.log(split)
let resplit= split.reverse().join("")



console.log(resplit);

console.log(`The reverse of ${a} is ${resplit}.`);