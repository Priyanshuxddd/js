//date
/*


let myDate= new Date()
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(myDate.toJSON());
console.log(typeof myDate);

*/
// let myCreatedDate= new Date(2025, 0,23)
// let myCreatedDate= new Date(2025,0, 23, 5, 3)


let myCreatedDate= new Date("2006-01-27")


//console.log(myCreatedDate.toLocaleString());


let myTimeStamp= Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000))



let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getDay());


newDate.toLocaleString('default', {
  
    weekday:"short",
    
})


