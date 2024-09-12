//Filter
const num=[1,2,3,4,6,4,8,90]
const newNum=num.filter((item)=>item>4)
//console.log(newNum)

//Map
const newmap=num.map((item)=>(item*2)+1)
//console.log(newmap)
const newmap1=num.map((item)=>(item*2)+1).filter((item)=>item<100)
//console.log(newmap1)

//Reduce
const arr=[1,2,3]
const total=arr.reduce(function(acc,currval){
    console.log(`acc is ${acc} and currval is ${currval}`)
    return acc+currval
},0)
console.log(total)