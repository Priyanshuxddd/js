

/*






function sayMyName (){
    console.log("p");
    console.log("r"); 
    console.log("i");
}

// sayMyName()


function addTwoNumbers(num1,num2){
  //     console.log(num1+num2);
       
}

//idhr log me answer 2 ayega
addTwoNumbers(1,1)



//idhr log me answer undefined ayega
const result= addTwoNumbers(1,1)
// console.log("Result: ",result);


function lol (nu1,nu2){
let result1 = nu1+nu2
return result1
console.log("this wont work coz we already returned");


}

const result1 = lol(1,2)
// console.log("result ", result1);


function loginUserMessage(username){
    return `${username} just logged in`
}


//ye return hogyi lekin abhi tak hamne nahi kaha isko print krdi thats why it didnt showed in console
loginUserMessage("natsuo")

// console.log(loginUserMessage("natsuo"));

/*


function user (username="sam"){
      if(!username){
        console.log("please enter username");
        return

    }
    return `${username} just logged `
}




// console.log(user());



// ...num1 here is rest operator
function calculateCartPrice(...num1){
return num1

}

// console.log(calculateCartPrice(200, 400,500));


*/




const user ={
  username: "priyanshu",
  price:199

}


function handleObject(anyObject){
  console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
  
}
// handleObject(user)

handleObject({
  username:"sam",
  price:300
})


const myNewArray= [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));

