const marvelHeros = ["thor","ironman"]
const dcHeros = ["superman","flash"]


// marvelHeros.push(dcHeros)
// console.log(marvelHeros);


// const allHeros = marvelHeros.concat(dcHeros)
// console.log(marvelHeros);


const all_new_heros= [...marvelHeros, ...dcHeros]


//console.log(all_new_heros);


/*

const Arr =[1,2,3,[4,5,6],[7],[6,7],[4,5]]

const real_arr= Arr.flat(Infinity)
console.log(Arr);

*/


// console.log(Array.isArray("priyanshu"))
// console.log(Array.from("priyanshu"));


// console.log(Array.from({name:"priyanshu"}));
//above one is imp answer is empty array


let score1= 100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));
