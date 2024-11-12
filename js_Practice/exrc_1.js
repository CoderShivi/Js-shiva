// Write a Javascript program to get the extension of a filename.
const getFileExtension=(str)=>str.slice
(str.lastIndexOf('.'));
console.log(getFileExtension('index.html'))

// Write a JavaScript program to replace every charachter in a given string with the character following it in the alphabet
// String.fromCharcode
//charCodeAT

const moveCharsForward=(str)=>str.split('').map(char=>String.fromCharCode(char.charCodeAt(0)+1)).join('');
console.log(moveCharsForward('shivani'));

// Write a javascript program to get the current date.Expected Output: mm-dd-yyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

const formateDate=(date = new Date())=>{
    const days = date.getDate();
    const months=date.getMonth() + 1;
    const Years=date.getFullYear();
    return `${days}-${months}-${Years}`
}
console.log(formateDate())

// Write a javaScript program to create a new string adding "New!" in front of a given string. If the given string begins with "New!" already then return the original string.

const addnew = (str) => str.indexOf('New!') === 0 ? str : `New! ${str}`;
console.log(addnew('New! Offers'))

