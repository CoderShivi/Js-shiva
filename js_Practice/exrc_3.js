//Write a JavaScript program to find the number of even didgits in an array of integer

function evenArray(arr){
    const newarr=arr.filter(num=>num%2===0).length;
    return newarr
}
console.log(evenArray([1,2,3,4,5,6,7]))

// Write a JavaScript program to find the number of even values up to a given number
