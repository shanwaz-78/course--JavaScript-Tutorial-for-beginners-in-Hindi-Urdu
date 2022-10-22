/*function table(array) {
    for (let a = 0; a < array.length; a++) {
        for (let b = 1; b <= 10; b++) {
            let c = array[a] * b;
            var str = " ";
            if (c >= 15) {
                for(let d = 0; d<c; d++){
                    str += "*";   
                } 
            }
            console.log(c + str);
        }
        console.log("\n");
    }
}


table([1,3,5,7,8,11,13,15]);

mirror([0, 2, 4, 6]) ➞ [0, 2, 4, 6, 4, 2, 0]

mirror([1, 2, 3, 4, 5]) ➞ [1, 2, 3, 4, 5, 4, 3, 2, 1]

mirror([3, 5, 6, 7, 8]) ➞ [3, 5, 6, 7, 8, 7, 6, 5, 3]*/

let array = [0, 2, 4, 6];
array.splice(4, 0, 4, 2, 0);

console.log(array);

