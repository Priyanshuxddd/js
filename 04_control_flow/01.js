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


// < , > , <= , >= , == , === , !=

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





























