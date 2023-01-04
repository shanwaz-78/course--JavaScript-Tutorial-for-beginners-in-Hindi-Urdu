const Fruit = "Apple";
const color = "red";

// we can use variable names in an object as a value;
const obj = {
  Fruit,
  color,
};

// we wrote only variable names & he access automatically use the values of variable.
console.log(obj);

// we can use variable name to create property name;
const n = "name";        
const obj2 = {
  ["fruit" + n]: "Banana",
  color: "yellow",
  'detail of'() {
    return `${this.fruitname} is color is ${this.color}`;
  },
};

console.log(obj2);
console.log(obj2["detail of"]());

const student = 'Saleh';
const age = 22;

// we can make strings to an object;
const fn = function () {
    const fullname = `${student} is a ${age} years old`
    return {fullname,age}
};

console.log(fn())