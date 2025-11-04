// Dates and Times

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toTimeString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(typeof myDate);

//let myCreatedDate = new Date(2025, 0, 28)

//let myCreatedDate = new Date(2025, 0, 28, 5, 41)

//let myCreatedDate = new Date("2025-08-28")
let myCreatedDate = new Date("08-28-2025")
//console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

//console.log(myTimeStamp);
//console.log(myCreatedDate.getTime());
//console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
//console.log(newDate.getMonth() + 1);
//console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday: "long",

})
//importanat (Local String)