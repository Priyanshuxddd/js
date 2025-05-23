//Immediately invoked function expressions (iife)



(function one(){
    console.log(`DB Connected`);
    
})();


( (name)=>{
console.log(`DB connected ${name}`);

})(`priyanshu`)

