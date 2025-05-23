//global scope



let a=300
//var =500


//thi is block scope 
if(true){

    let a =10
    const b = 20
 // console.log("inner :", a);
   // var c =30

}





// console.log(a)
// console.log(b);
// console.log(c);

 function one (){
   const username= "priyanshu"

   function two(){
      const website= "youtube"
      console.log(username);
     
   }
      // console.log(website);
     
   

    two()
 }


//   one()


if(true ){
   const username ="priyanshu"
   if(username=== "priyanshu"){
      const website = " youtube"
    //  console.log(username + website);
      
      }

 //     console.log(website);


   }


  //  console.log(username);



// + ++++++++++++++intresting ++++++++++++
 

console.log(addOne(5))

function addOne(num){
   return num+1


}

console.log(addTwo(7));

const addTwo = function(num){
   return num+2
}


 


























                  