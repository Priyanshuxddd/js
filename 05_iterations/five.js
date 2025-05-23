const coding = ["js", "java", "ruby", "cpp"]

coding.forEach( function (item) {
 
  //  console.log(item);
    
} )


coding.forEach((item)=>{
    //console.log(item);
    
})





function printMe(item){
//    console.log(item);
    
}
// coding.forEach(printMe)
/*
coding.forEach((item , index , arr )=>{
   console.log(item, index , arr);

})
*/

const myCoding = [

    {
        langaugeName: "javaScript",
        languageFileName: "Js"
    },

     {
        langaugeName: "c++",
        languageFileName: "cpp"
    },

    {
        langaugeName: "python",
        languageFileName: "py"
    }

]
myCoding.forEach((item)=>{
   
    console.log(item.langaugeName);
    
})