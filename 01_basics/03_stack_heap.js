//primitive --> stack

let myYoutube = "natsuocode"

let anotherName=myYoutube
anotherName="subcooks"

console.log(myYoutube);
console.log(anotherName);



//non ->> heap



let userOne ={
    email:"user@gmail.com",
    upi:"user@bl"
}

let userTwo= userOne

userTwo.email="lol@google.com"

console.log(userOne);
console.log(userTwo);



