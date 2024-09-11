const marvel_heros=["thor","ironman","Spiderman"]
const dc_heros=["Superman", "batman","flash"]
// marvel_heros.push(dc_heros)
// console.log(marvel_heros)
// console.log(marvel_heros[3][1])
// console.log(marvel_heros.concat(dc_heros))
const new_heros=[...marvel_heros,...dc_heros]
console.log("New heros",new_heros)

const arr=[1,23,2,[1,2,4,6,[7,8,6,5]]]
console.log(arr.flat(Infinity))
console.log(Array.isArray("Shiva"))
console.log(Array.from("Shiva"))
console.log(Array.from({name:'Shiva'})) // Interesting it give empty array

let score=100
let score1=200
let score2=300
console.log(Array.of(score,score1,score2))