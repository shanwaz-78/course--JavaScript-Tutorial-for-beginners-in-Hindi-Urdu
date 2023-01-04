class ScStudent{
    constructor(){
       function getPrc(num) {
       const fnval = num / 600 * 100;
            console.log(fnval * 3)
        }
        getPrc(302)
    }
}

 // inheritance properties of ScStudent Class.

class BBA extends ScStudent{
    constructor(){
        super(); // super is used whenever we write to same methods in two different classes we have to use super()
        function getPrc(num) {
         console.log(num / 600 * 100);
        }
        getPrc(302)
    }
}

class BCA extends BBA{ // it's called multilavel inheritance;

}

const val1 = new ScStudent();
const val2 = new BBA();
const val3 = new BCA();