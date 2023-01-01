const User = ["Yahoo Baba", 25, "Male"];

// we can assign each variable according to the values
const [name, age, gender] = User;
console.log(name); // Yahoo baba
console.log(age); // 25
console.log(gender); // male

// assign each values in each new variable in function;
function destructArr([name, age, gender]) {
  return [name, age, gender];
}
console.log(destructArr(["Shanwaz", 25, "male"]));
