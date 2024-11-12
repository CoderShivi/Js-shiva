// Write a javaScript program to create a new string from a given string taking the first 3 character and the last 3 character of a string and adding them together. The string length must be 3 or more, if not, the original string is returned.

function createStr (str) {
 if (str.length <3){
  return console.log("Length of string is less than 3")
 }
 else{
    str=str.slice(0,3)+ str.slice(-3)
    console.log(str)
 }
}
createStr("Shivani")

// Write a JavaScript program to extract the first half of a string of even length.

function halfOfString(str){
 if (str.length %2 ==0){
    str=str.slice(0, str.length/2)
    console.log(str)
 }
 else{
  console.log("Length of string is odd")
 }
}
halfOfString("Shiv")
