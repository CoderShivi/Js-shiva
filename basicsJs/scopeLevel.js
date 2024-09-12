//{} It is A scope
if (true){
    const a=12 // In if statement we called it block scope
    let b=34
    var c=2
}
//console.log(a)// It gives a is not defined means in outer of the scope not accessible
//console.log(b)// Same as above line
//console.log(c)// It is accessible because var has global scope

function one(){
    const userName="Shivani"
    function two(){
        const website="youtube"
        //console.log(userName)
    }
    //console.log(website)
    two()
}
one()

// In browser Global object is a Window Object
//Talk about this object
const user={
    name:'Shivaa',
    age:24,
    welcomeMessage:function(){
        //console.log(`${this.name}, Welcome to website`)
        //console.log(this) // It Gives whole Object (user)
    }
}
// user.welcomeMessage()
// user.name="Shivani"
// user.welcomeMessage()
// console.log(this) // It give a empty Object

// function myName(){
//     let name="Shivani"
//     console.log(this.name) // Give undefined don't work like  as arrow function
// }
// myName()

// Arrow Function
const yourName=()=>{
    let name ="Shivani"
    console.log(this) // It give Empty
}
//yourName()
// const addno=(a,b)=>  (a+b)
// console.log(addno(1,2))

// IIFE function 
( function shiv(){    // It is known as named IIFE
console.log("Hello World")
})(); 

// ((name)=>{ // It is known as unnamed IIFE
// console.log(`Hello ${name}`)
// })(Shiva);
