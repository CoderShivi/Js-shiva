function addtwoNum(num1,num2){
  add=num1+num2
  return add
}
addtwoNum(3,4)
addtwoNum(3,null)
addtwoNum(4,"u")
const result=addtwoNum(90,45)
// console.log("Result",result)
// console.log(addtwoNum())

// When you dont know how many argument we pass in a function
function calculateCartPrice(...num){ // for solve above problem we use rest operator
return num
}
console.log(calculateCartPrice(200,34,566))

// Know we learn how we pass object in a function

user={
    name:'Shivani',
    age:24
}
function handleObjects(anyObject){
console.log(`My name is ${anyObject.name} and age is ${anyObject.age}`)
}
//handleObjects(user)
handleObjects({name:'Shivani Dubey', age:24})
// Same as object we can also pass Array in function