const arr=[1,2,3,4,5,]
// for (const num of arr){
//     console.log(num)
// }
const greeting="Hellow World"
// for(const great of greeting){
//     console.log(great)
// }

const programming=["sd","df","io","yb"]
// for (const keys in programming){
//     console.log(programming[keys])
// }

const obj={ // We can iterate object use of for in loop
    name:"Shivani",
    age:24,
    course:"Full Stack with Python"
}
// for (const item in obj){
//     console.log(obj[item])
// }

// Map
const map=new Map() // for in loop don't work on map
map.set('in',"India")
map.set("USA","United State Kingdom")
// console.log(map)

// We can iterate array by the use of foreach loop

const lang=["hindi","Eng","Kannad","tamil"]
// lang.forEach(function (item){
//     console.log(item)
// })

//Another way
 lang.forEach((item)=>{
    // console.log(item)
 })
//Another way
function printME(item){
//console.log(item)
}
lang.forEach(printME)

lang.forEach((item,index,arr)=>{
    console.log(item,index,arr)
})