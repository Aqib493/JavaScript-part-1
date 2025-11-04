
// var c = 300
let a = 300
// {}   // isko curly braces kahty hain lekin yeh scope bhi hy {scope}
if (true) {
    let a = 10
    const b = 20
//  console.log("Inner: ", a);
 
}

// console.log(a);
// console.log(b);
// console.log(c);

//**********Nested Scope************//
function one() {
    const username = "Aqib"

    function two (){
        const website = "YouTube"
        // console.log(username);
        
    }
    // console.log(website);
     two()
}
one()
 
if (true) {
    const username = "Aqib"
    if (username === "Aqib") {
        const website = " youtube"
        // console.log(username + website);
        
    }
    // console.log(website);
    
}
// console.log(username);

// ************Interesting*************//
 console.log(addone(5));
function addone(num) {
    return num + 1
}

console.log(addTwo(5));

const addTwo = function(num) {
    return num + 2
}
