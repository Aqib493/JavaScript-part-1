// Array Part 2
const marvel_heroes = ["Thor", "Ironman", "Spiderman"]
const dc_heroes = ["superman","flash", "batman"]

//marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);

// const all_heroes =  marvel_heroes.concat(dc_heroes)
// console.log(all_heroes);


const all_heroes =  [...marvel_heroes,...dc_heroes]
//console.log(all_heroes);

const another_array = [1, 2, 3,[4, 5, 6,[7, 8],[9, 1, [2, 5, 9]]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


console.log( Array.isArray("Aqib"));
console.log(Array.from("Aqib") );
console.log(Array.from({name: "Aqib"})); // iss mein batana zaroori hy kahobject ki value konsi hy aur object 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
