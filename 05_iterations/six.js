/*

const coding = ["js", "java", "ruby", "cpp"]


const values= coding.forEach((item)=>{


  console.log(item);
    
})


console.log(values);

*/

const myNums= [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter((num)=>num >4)
// console.log(newNums);


// neeche agar hum return nahi lagate to output empty array ayega return lagana pada coz curly braces jaise hi humne lagaya udhr scope bangya or scope start krne ke baad return krna hi pdega upar vale me sirf brackets lagaye to kaam krgya bina return ke

// const number = myNums.filter((num)=>{
// return  num>4
// })
// console.log(number);


const movies = [
  { title: "Interstellar", rating: 8.6, genre: "Sci-Fi" },
  { title: "Dangal", rating: 8.4, genre: "Drama" },
  { title: "Fast X", rating: 5.9, genre: "Action" },
  { title: "Spirited Away", rating: 8.6, genre: "Animation" },
  { title: "Oppenheimer", rating: 8.7, genre: "Biography" },
  { title: "RRR", rating: 7.9, genre: "Action" },
  { title: "Parasite", rating: 8.6, genre: "Thriller" },
  { title: "3 Idiots", rating: 8.4, genre: "Comedy" },
  { title: "Coco", rating: 8.4, genre: "Animation" },
  { title: "The Room", rating: 3.7, genre: "Drama" },
];

let userMovie = movies.filter ((mv)=> mv.genre === 'Animation' && mv.rating>8.4)


console.log(userMovie);








