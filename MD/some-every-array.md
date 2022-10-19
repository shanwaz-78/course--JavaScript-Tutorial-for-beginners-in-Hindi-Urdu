 document.write("Some Array");

> var a = [10,14,16,18,21];
document.write(a);
var b = a.some(checkadult);
document.write(b);

> function checkadult(age) {
    return age >=18;
}
---
 * > #### [For More Click Over This.](../Js/some-every-array.js)