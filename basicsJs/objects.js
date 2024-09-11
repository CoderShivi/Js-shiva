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

console.log(user.greeting())
console.log(user.greeting_1())
