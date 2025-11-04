// Singleton
// object.create
// Object literals

const mySym = Symbol("key1")

const jsUser = {
name: "Aqib",
"full name": "Aqib jangla",
[mySym]: "mykey1",
age: 20,
location: "AliPur",
email: "Aqib@jangla.com",
isLoggedIn: false,
lastLoginDays: ["Monday", "Saturday"]
}

// console.log( jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(typeof jsUser[mySym]);


jsUser.email = "MaharAqib@chatgpt.com"
//Object.freeze(jsUser)
jsUser.email = "Aqib@microsoft.com"
//console.log(jsUser);

jsUser.greeting =  function(){
    console.log("Hello Js Users");
    
}
jsUser.greeting2 = function(){
    console.log(`Hello Js users ${this.name}`);
    
}
console.log(jsUser.greeting());
console.log(jsUser.greeting2());

