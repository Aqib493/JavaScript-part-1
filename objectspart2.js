// Singleton Or Constructor

// const tinderUser = new Object()   yeh aik singleton object hy 

const tinderUser = {}  //yeh aik non singleton object hy

 tinderUser.id = "123abc"
 tinderUser.name = "Aqib"
 tinderUser.loggedIn = false

// console.log(tinderUser);

const regularUser = {
    fullName: {
        userFullName: {
            firstName: "Muhammad",
            lastName: "Aqib"
        }
    }
}
console.log(regularUser.fullName?.userFullName.lastName);

const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "c", 4:"d"}
//const obj3 = {obj1, obj2}
//const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2 }
//console.log(obj3);

const users = [
    {
        id: 1234,
        email: "aqib@gmail.com"
    },
     {
        id: 1234,
        email:"aqib@gmail.com"
    },
     {
        id: 1234,
        email: "aqib@gmail.com"
    },
     {
        id: 1234,
        email: "aqib@gmail.com"
    },
     {
        id: 1234,
        email: "aqib@gmail.com"
    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('loggedIn'));
