// Primitive 
// isko call by value bhi kahty hain
/* iska matlab woh datatype jo by value copy hoti hain Means memory mein jis jagha 
allocate hoti hain wahin sy original value copy hoti hy aur agr koi change karty 
hain toh uski copy mein hoti hy orignal value same rehti hy  */

// types 
/* iski 7 types hain 
1. String  2. Number  3. Boolean  4. null  5. undefined  6.undefined  7. symbol  8. bigInt  
null ka matlab kah empty nahi hy issy murad kah memory mein koi value hy lekin wo show nahi ho rahi
undfined ka matlab memory mein variable toh create ho gia hy lekin ussy abhi tak value nahi di gai koi*/

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
//console.log(id === anotherId);
//console.log(typeof anotherId);



// Non-Perimitive
// isko call by Reference bhi kahty hain 
// types 
/* 1. Array  2. Object  3. Functions */

const heros = ["Aqib", "Saqib", "Saad"] //Array
let myObj = {  // Object
    name: "Aqib",
    age: "20",

}
const myFunction = function () { // function
    console.log("Hello World");
    
}
//console.log(typeof myFunction);
//console.log(typeof heros);



//****************STACK AND HEAP MEMORY*************//


// Stack memory [yeh perimitive datatypes mein use hoti hain] 
// Heap memory [yeh non-perimitive datatypes mein use hoti hain]


//Stack example
let myWebsiteName = "Aqib's Portfolio"
let anotherName = myWebsiteName
anotherName = "Mahar Aqib"
console.log(myWebsiteName);
console.log(anotherName);

// Heap example
let userOne = {
    name: "Saqib",
    age: "20"
}
let userTwo = userOne
userTwo.name = "Aqib"

console.log(userOne.name);
console.log(userTwo.name);

