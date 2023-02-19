// Generators generate the values in on the fly.-> means (when we call generator generate a number for me).

function* numberGen() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
};

const genVals = numberGen();
console.log(genVals.next().value);
console.log(genVals.next().value);
console.log(genVals.next().value);
console.log(genVals.next().value);

console.log('\n');

function * numberGen2() {
    let i = 1;
    while (true) {
        yield i++
    }
}
const genVals2 = numberGen2();
console.log(genVals2.next().value);
console.log(genVals2.next().value);
console.log(genVals2.next().value);
console.log(genVals2.next().value);
console.log(genVals2.next().value);