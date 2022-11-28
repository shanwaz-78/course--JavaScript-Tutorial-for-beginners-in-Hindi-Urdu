let a, b, c;
a = ["Example1","Example2"];
b = ["Practice1","Practice2"];
c = [...a, ...b]; // Spread Operator.
console.log(c);

let ex1, ex2, ex3;
ex1 = {Name : "Shanwaz"};
ex2 = {Age : 18};
ex3 = {...ex1, ...ex2}; //Spread Operator.
console.log(ex3);

let num = 0;
function fn(name,...args) { // rest Operator.
    for(let val in args){
        num += args[val];
    }

    console.log(num)
}
console.log(fn("Saleh",10,20))
