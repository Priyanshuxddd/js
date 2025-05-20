//singleton  

//object literal

//Object.create


const mySymbol= Symbol ("key1")


const JsUser={
    name:"priyanshu",
    fullname:"priyanshu saxena",
    [mySymbol]:"mykey1",
    age:19,
    location:"agra",
    email:"pp@gamil.com",
    isLoggedIn: false,
    LastLoginDay: ["monday","sunday"]
    
}


/*


console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["fullname"]);
console.log(JsUser[mySymbol]);

JsUser.email= "natsuo@chatgpt.com"
Object.freeze(JsUser)
//freeze krdiya isliye console me lol vala gmail aya hi nahi

JsUser.email= "lol@gamil.com"
console.log(JsUser);



/*


JsUser.greeting = function(){
    console.log("hii js user");
    
}
console.log(JsUser.greeting());




JsUser.greeting2 = function(){
    console.log(`hello js user, ${this.name}`);
       
}
console.log(JsUser.greeting2());


*/




