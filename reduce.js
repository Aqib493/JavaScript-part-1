const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc is: ${acc} and currval is:  ${currval} ` );
    
//     return acc + currval
// }, 3)


// const myTotal = myNums.reduce((acc , curr) => acc + curr ,0)
// console.log(myTotal);


const shopingCart = [
    {
        itemName:'JavaScript Course',
        price: 999
    },
      {
        itemName:'Python Course',
        price: 599
    },
      {
        itemName:'Mobile Dev Course',
        price: 2599
    },
      {
        itemName:'Data Science Course',
        price: 9999
    }
]

const totalToPay = shopingCart.reduce((acc, item) => acc + item.price , 0)
console.log(totalToPay);
