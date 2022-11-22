function fn(name,...args) {
    let sum = 0;
    console.log(arguments)
    console.log(`hello ${name}`)
    for(let i in args){
        sum += args[i];
    }
    console.log(sum)
}
console.log(fn("Shanwaz",10,20,30));