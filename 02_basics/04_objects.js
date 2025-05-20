// const DcUser= new object() 
const DcUser ={}
DcUser.id= "123abc"
DcUser.name="natsuo"
DcUser.isLoggedIn= false


// console.log(DcUser);


const regularUser={
    email:"some@gmail.com",
    fullname: {
        userfullname:{
            firstname: "priyanshu",
            lastname:"saxena"
        }
    }

}
// console.log(regularUser.fullname?.userfullname);


const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

// const obj3={ obj1,obj2}

// const obj3= Object.assign({}, obj1 ,obj2)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

console.log(DcUser);
console.log(Object.keys(DcUser));
console.log(Object.values(DcUser));
console.log(DcUser.hasOwnProperty('isLoggedIn'));


