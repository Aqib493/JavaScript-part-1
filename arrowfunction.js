const user = {
    userName : "Aqib",
    price: 999,

    welcomeMessage: function(){
        // console.log(`${this.userName} , welcome to website`);
        // console.log(this);
        
    }

    }
    // user.welcomeMessage()
    // user.userName = "Saim"
    // user.welcomeMessage()
    // console.log(this);
  
    
//  function chai() {
//     let userName = "Aqib"
//     console.log(this.userName);
    
//  }
//  chai()

// const chai = function () {
//      let userName = "Aqib"
//     console.log(this.userName);
// }

const chai =  () => {
     let userName = "Aqib"       // Arrow Function
    console.log(this.userName);
}


// chai()

// const addTwo =  (num1, num2) => {
//     return num1 + num2
// }

// const addTwo =  (num1, num2) => num1 + num2  // Implict Function

// const addTwo =  (num1, num2) => (num1 + num2)

const addTwo =  (num1, num2) => ({userName: "Aqib"})

console.log(addTwo(3, 4));



// const myArray = [2, 3, 4, 7, 9]

// myArray.forEach()