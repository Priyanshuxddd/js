const myObject = {
    js: "JavaScript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by apple"
}


//for in loops 

for (const key in myObject){
 
   // console.log(`${key} shortcut is for ${myObject[key]}`);

}

const programming = ["js","java", "cpp", "py"]

for(const key in programming){
   // console.log(programming[key]);
}    

//maps ka output kuch ni ayega terminal me coz maps are not itterable 
/*

const map = new Map()

map.set('IN', "India")
map.set('USA', "America")
map.set('FR', "France")

for (const key in map) {
    console.log(key);
    
  
}
    */