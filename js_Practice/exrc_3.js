//Write a JavaScript program to find the number of even digits in an array of integer

function evenArray(arr){
    const newarr=arr.filter(num=>num%2===0).length;
    return newarr
}
console.log(evenArray([1,2,3,4,5,6,7]))

// Write a JavaScript program to find the number of even values up to a given number
const CountEvenNumbers=(arr)=> arr.filter(num=>num%2===0)
const createArrayOfNumbers=(num)=>{
  const returnArray=[]
  for (let i=1;i<=num;i++){
    returnArray.push(i)
  }
  return returnArray;
}
console.log(CountEvenNumbers(createArrayOfNumbers(6)))

// Write a javaScript program to check whether a given array of integers is sorted in ascending order.

const isSortedArray=(arr)=>{
for(let i=0;i<arr.length;i++){
    if(arr[i+1]<arr[i]){
        return false
    }
}
return true
}

console.log(isSortedArray([1,2,4,2,3,]))
console.log(isSortedArray([1,2,3,4,5,6]))

// convert given array in ascending order
const sortedArray=(arr)=>{
    const sortArray=[]
    for (let i=0;i<arr.length;i++){
        for(let j=0; j<arr.length;j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
            }
        }
    }
    return arr
}

console.log("Sorted array",sortedArray([1,3,6,2,7,5]))

// In second method
const sortArray=(arr)=>{
    return arr.sort((a,b)=>a-b);
}
console.log("Sort Array is",sortArray([4,5,45,2,3,1]))

// Write a javascript program to get the largest even number from an array of integer.
const largestEvenNum=(arr)=> Math.max(...arr.filter(num=>num%2===0))
console.log(largestEvenNum([1,2,56,45,98]))

// Write a javaScript program to replace the first digit in a string (Should contains at least digit) with $ character.
const replaceFirstDigit=(str)=>str.replace(/[0-9]/,"$")
console.log(replaceFirstDigit('ABC23gb'))