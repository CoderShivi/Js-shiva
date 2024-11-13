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

//Write a javaScript program to concatenate two strings except their first character.
function concateString(str1,str2){
   str3=str1.slice(1)+str2.slice(1)
   console.log(str3)
}
concateString("sshiv","ddubey")

// Given two values, write a javaScript program to find out which one is nearest to 100
function nearestNoTo100(a,b){
   const diffA=Math.abs(100-a) 
   const diffB=Math.abs(100-b)
   if(diffA<diffB){
      return a
   }
   else if (diffA>diffB){
      return b
   }
   else{
      console.log("Both values are equally close to 100")
   }
}

console.log(nearestNoTo100(98,97))

// Write a JavaScript program to check a given string contains 2 to 4 occurrences of a specified character.
function countChars(str,char){
   const count= str.split(char).length-1
   return count >= 2 && count <= 4;

}
console.log(countChars("helllo","l"))