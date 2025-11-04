

// function sayMyName() {
//     console.log("A");
//     console.log("Q");
//     console.log("I");
//     console.log("B");
// }

// sayMyName()

function addTwoNumbers(number1, number2) {
    // let result = number1 + number2
    // return result
return number1 + number2

}

const result = addTwoNumbers(3, 4)
// console.log("Result: ",result);


function loginUserMessage(username = "Aqib") {
    if (!username) {
        // console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Muhammad Aqib Mahar"));

function calculateCartPrice(val1, val2, ...num1) {
    return num1
}
// console.log(calculateCartPrice(200, 400, 500, 1000));

const user = {
    username: "Aqib",
    price: 199
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handleObject(user)
handleObject({
    username: "Saqib",
    price: 100
})

const myNewArray = [200, 400, 500, 600]

function returnSecondValue(getArray) {
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));

