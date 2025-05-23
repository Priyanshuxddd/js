const myNums = [1,2,3]

/*
const myTotal = myNums.reduce(function  (acc,currentValue) {
    console.log(`acc ${acc} and currentValue : ${currentValue}`);
    
return acc + currentValue

}, 0)


*/

//  const myTotal = myNums.reduce((acc,curr) =>acc+curr, 0)


const shoppingCart = [
     {
        itemName: "jsCourse",
        price:2999
     },
      {
        itemName: "SDE",
        price:30000
     },
      {
        itemName: "API",
        price:1299
     },
      {
        itemName: "WebDev",
        price:3999
     },
]

const myTotal = shoppingCart.reduce( (acc,item) => (acc + item.price),0 )


console.log(myTotal);
