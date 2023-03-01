const str = '1';
console.log(+str - 1)
var obj1 = { // 
    name : 'kyle'
}
var obj = obj1 // passes the reference
console.log(obj == obj1)

// function fn(name) {
//     this.name = name
// }



const arr1 = [1,2,3];
const arr2 = arr1;
console.log(arr1);
console.log(arr2);

arr2.push(4);
arr2.push(5)
console.log(arr1);
console.log(arr2);
const a = 10 - 'kyle';
console.log(typeof a)


console.log([1] == true) // he will take out the value 1
console.log([''] == true)
console.log(0 === -0)
console.log(String(0) == Number.parseFloat(-0))

const myStr = 'Hello';
const newStr = myStr.toLowerCase();
console.log(myStr);
console.log(newStr);