//+++++++control flow ++++++++++++

//if
/*

const isUserLoggedIn = true
const temperature = 41

if(temperature === 59 ){
    console.log("less than 50");

} else {
    console.log("temp is gretaer than 50");
    
}

*/


// < , > , <= , >= , == , === , != , !==

/*

const score = 200

if(score>100){
    const power = "fly"
    console.log(`user power : ${power}`);
    
}  
     console.log(`user power : ${power}`);
    


*/


// const balance =1200

// if(balance >500) console.log("test");
/*

if(balance < 500){
    console.log("less than 500");
    
}else if(balance<750){
console.log("less than 750");

}else if (balance<900){
    console.log("less than 900");
    

}else {
    console.log("less than 1200");
    
}

*/



const userLoggedIn =true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true


if(userLoggedIn && debitCard){
    console.log("allow to buy");    

}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("user logged in");
    

}

//Nullish Coalescing Operator (??): null undefined

let val1 ;
// val1 = 5 ?? 10

//   val1 = null ?? 10

// val1 = undefined ?? 15

val1 = null ?? 10 ?? 20


console.log(val1);


// terniary operator

//Condition ? true : false 

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");




//&& means saari condition true honi chiy e
// || means ek bhi true ho to kaam kregi

























