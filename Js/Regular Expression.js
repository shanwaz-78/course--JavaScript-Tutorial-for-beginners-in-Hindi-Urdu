// Regular expressions are patterns used to match character combinations in strings.
const regExp = /very/g;

const str = 'This is very very initial str';
console.log(str.replace('very','VERY')) // It will replace only one small very to larger.
console.log(str.replace(regExp,'VERY'))