let name="shiva"
let myName=name // In Primitive Data Type take Stack Memory means in this changes occur in copy of data type
myName="Shivani Dubey"
//console.log(name)
//console.log(myName)
let info={name:'varshu',age:24}
console.log(info)
let myInfo=info
myInfo.name="Shiva" // In Non-Primitive data type changes occur in original object when we take refernce from one object to another 
console.log(info)
console.log(myInfo)