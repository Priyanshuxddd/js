const user ={
    username: "priyanshu",
    price: 999,         

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to the website `);
      //  console.log(this);
        
    }

    }

/*

user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()

*/


//console.log(this);


/*

function chai (){
   let username = "nat"
    console.log(this.username);
    
}
chai()

*/


const lol = ()=>{
    let username = "noo"
    console.log(this);
    
}

//lol()

/*

this is explicit return

const addTwo = (num1 , num2)=>{
    return num1+num2
}

console.log(addTwo(3,3))
*/ 




// thi is implicit return


//  const addTwo = (num1,num2) => (num1+num2)
// const addTwo=(num1 , num2)=> ({username: "priyanshu"})

console.log(addTwo(3,3));


 