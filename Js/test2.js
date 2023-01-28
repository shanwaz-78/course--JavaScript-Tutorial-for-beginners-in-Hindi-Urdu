// const array1 = [[0, 1], [2, 3], [4, 5]];
// // Expected output: Array [4, 5, 2, 3, 0, 1]
// const val = array1.reduceRight((acc,crr)=> acc.concat(crr));
// console.log(val)

// const array2 = ['a', 'b', 'c'];
// array2.forEach(e => console.log(e))

// const a = ['Shanwaz','Saleh','Dan'];
// const b = a.filter(e => e.length <= 3);
// console.log(b)

// const object1 = {
//   a: 'somestring',
//   b: 42,
// };

// const val2 = Object.entries(object1);
// console.log(val2)

// const object2 = {
//   property1: 42
// };
// console.log(Object.getOwnPropertyDescriptor(object2,'property1'))

// const object3 = {
//   a: 1,
//   b: 2,
//   c: 3
// };

// console.log(Object.keys(object3))

// const object4 = {
//   property1: 42
// };
// Object.seal(object4);
// console.log(Object.isSealed(object4))

// const target = { a: 1, b: 2 };
// target.a = 'Shanwaz'
// target.b = 'Danish';

// const object5 = {
//   a: 'somestring',
//   b: 42,
//   c: false
// };

// console.log(Object.values(object5))

// const sentence = 'The quick brown fox jumps over the lazy dog.';

// // const val3 = sentence.slice(5,6)
// // console.log(sentence.at(5))
// console.log(sentence.charAt(5))
// // console.log(val3)
 
// const sentence2 = 'The quick brown fox jumps over the lazy dog.';
// const val6 = sentence2.includes('fox');
// console.log(val6)

// const str1 = 'Cats are the best!';
// console.log(str1.endsWith('best!'))
// // Expected output: true

// const greeting = '   Hello world!   ';
// console.log(greeting.trimEnd())
// // Expected output: "   Hello world!";

// const sentence3 = 'The quick brown fox jumps over the lazy dog.';
// const val = sentence3.toUpperCase();
// // Expected output: "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."
// console.log(val)
// console.log(val.toLowerCase())

// const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
// const val2  = p.replace('dog','monkey')
// const val3  = val2.replace('dog','monkey')
// console.log(val2)
// console.log(val3)

// const chorus = 'Because I\'m happy. ';
// console.log(chorus.repeat(20))
// Expected output: "World, Hello"
// Expected output: "The quick brown fox jumps over the lazy monkey. If the monkey reacted, was it really lazy?"
const str1 = 'Hello';
const str2 = 'World';
console.log(str2.concat(', ', str1))
const val4 = `${str2}, ${str1}`
console.log(val4)