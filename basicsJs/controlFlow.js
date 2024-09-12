const userLoggedIn=true
const debitCard=true
const loginFromGoogle=false
const loginFromEmail=true

if(userLoggedIn && debitCard && 2==3){
    console.log("User is alloe for to by this course")
}

if(loginFromGoogle ||loginFromEmail){
    console.log("User Logged In")
}

const month=3
switch (month) {
    case 1:
        console.log("January")
        break;
     case 2:
        console.log("February")
        break;
     case 3:
        console.log("march")
        break;
    case 4:
        console.log("April")
        break;
    default:
        console.log("Default Case")
        break;
}

//falsy values- false, 0, -0, BigInt 0n, "", null, undefined, null
//truthy value- "0", "false"," ", [], {}, function(){}

userEmail=[]
if(userEmail.length==0){
    console.log("It is a Array")
}
user={}
if(Object.keys(user).length==0){
    console.log("It is an Object")
}
// Nullsh coalescing operator (??):null undefined
let v1
// v1=5??10
// v1=null??40
// v1=undefined??3
// v1=null??undefined
// v1=undefined??null
// v1=null??undefined??40
// v1=null??23??1
// console.log(v1)

// Terniary Operator
const price=200
price<=80?console.log("Less than 80"):console.log("More than 80")
