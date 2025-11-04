//  Truthy 
/*
isska matlab hy kah kisi cheeze ko asseum karna
 means han thk ho sakta hy lekin woh confirm na 
 ho as a consideration
*/

const userEmail = []

if (userEmail) {
    console.log("Got User Mail");
    
}else{
    console.log("Don't have User Mail");
    
}

// falsy values 
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values 
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length===0) {
//     console.log("Array is empty");
    
// }

const emptyObject = {}

if (Object.keys(emptyObject).length=== 0) {
    console.log("Object is empty");
    
}

// Nullish Coalescing Operator(??) : null   undefined
 
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20


console.log(val1);


// Ternary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("more than 80");

