//  If statement
const isuserloggedin = true
const temperature = 41
// if (temperature === 40) {
//     console.log("Less than 50");

// }else{
// console.log("Temperature is greater than 50");
// }
// console.log("executed");

// <, >, <=,  >=, ==, !=, ===, !== 

// const score = 200

// if (score > 100) {
//     let power = "fly" 
//     console.log(`User Power: ${power}`);
//    }

// console.log(`User Power: ${power}`);


// const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2"); 
/* yeh jo code uper likha hy issy implict code khaty hain lekin 
issy professionaly prefer nahi kkia jata yeh single line hota hy 
agr multiple line code bnana chahty hain toh comma laga kr code ko extend 
kar sakty hain
*/

// if (balance < 500) {
//     console.log(" less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
// } else if (balance < 900) {
//     console.log("less than 900");
// } else {
//     console.log("less than 1200");
    
// }

const userLoggedIn = true
const debitCard = true
const userLoggedInFromGoogle = false
const userLoggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to Purchase");
    
}

if (userLoggedInFromGoogle || userLoggedInFromEmail) {
    console.log("User LoggedIn");
    
}