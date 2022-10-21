function table(array) {
    for (let a = 0; a < array.length; a++) {
        for (let b = 1; b <= 10; b++) {
            let c = array[a] * b;
            var str = " ";
            if (c <= 10) {
                for(let d = 0; d<c; d++){
                    str += "*";   
                } 
            }
            console.log(c + str);
        }
        console.log("\n");
    }
}


table([1, 7, [5, 8], [3, 5, 2, [9, 8, 2, 11, [2]]], [8, 9], 13, 6, 8]);
