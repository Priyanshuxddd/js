/*
//++++++++++++++for ++++++++++++++++++

for (let index = 0; index <= 10 ; index++) {
    const element = index;
 
    console.log(element);

    if (element== 5) {
        console.log("5 is best number");
        
        
    }

}
*/

for (let i = 0; i <=10 ; i++) {
   
    //  console.log(`outer loop value ${i}`);

    for (let j = 0; j < 10; j++) {
       
      // console.log(`inner loop value ${j} and outer loop ${i}`);
     //console.log(i + '*' + j + ' = ' + i*j);
    
    }
    
}


let myArr= ["flash", "batman ", "superman"]
 
   // console.log(myArr.length);

for (let i = 0; i < myArr.length; i++) {
    
    const element = myArr[i];
   // console.log(element);
    
}

//     break and continue 
/*

for (let i = 1; i <=20 ; i++) {
 
    if(i==5){
        console.log(`5 is Detected exiting `);
        
        break;
        
    }
    console.log(`Value of i is ${i}`);

 
}

*/

for (let i = 1; i <=20 ; i++) {
 
    if(i==5){
        console.log(`5 is Detected continuing `);
        
        continue;
        
    }
    console.log(`Value of i is ${i}`);

 
}



















