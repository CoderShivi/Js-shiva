// We declare object with two one is Literal or another is contructor(Create Singelton )
//Object.create - Singleton

// Object Literals
const mySymbol=Symbol("mykey")
const user={
    name:"Shivani",
    "lastname":"Dubey",
    [mySymbol]:"myKey1",
    age:24,
    location:"banglore",
    email:"shiv123@gmail.com",
    isLoggedIn:false,
    lastLoginDay:["Monday","saturday"]
}
// console.log(user.email)
// console.log(user["email"])
// console.log(user["lastname"])// We can access object value like this also
// console.log(user[mySymbol]) // we can access symbol like this
// console.log(typeof user[mySymbol])

user.age=23
// console.log(user.age)
//Object.freeze(user) // By this we can freeze the object so we can not change anything in this object
user.email="shia45@gmail.com"
// console.log(user.email)
// console.log(user)
// Now we add greeting in object
user.greeting=function(){
    console.log("Hello Everyone")
}

user.greeting_1=function(){
    console.log(`Hello ${this.name}`)
}
// console.log(user.greeting())
// console.log(user.greeting_1())

// How we decalre object through contructor
const user_1=new Object() // It is known as Singleton Object
const user_2={}// it is known as non-singleton Object
user_1.name="Mahi"
user_1.age=22
//console.log(user_1)

const regularUser={
    email:'mahi223@gmail.com',
    fullName:{
        userFullName:{
            firstName:'shiva',
            lastName:'Dubey'
        }
    }
}
//console.log(regularUser.fullName.userFullName.lastName)

const obj={1:'abs',2:'cde'}
const obj1={4:'lkl',5:'nnc'}
//const obj2=Object.assign({}, obj, obj1) //{} it is a target object
const obj2={...obj,...obj1}
// console.log(obj2)
// console.log(Object.keys(obj2))
// console.log(Object.values(obj2))
// console.log(Object.entries(obj2))
// console.log(obj2.hasOwnProperty(1))

// Destructuring
const course={
    courseName:'javaScript',
    price:999,
    courseinstructor:'Hitesh'
}
const {courseinstructor}=course
const {courseinstructor:instructor}=course
console.log(courseinstructor)
console.log(instructor)