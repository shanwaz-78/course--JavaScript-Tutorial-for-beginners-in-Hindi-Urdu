var a = [10,14,19,21,23];
document.write(a + "<br>");

var b = a.some(checkadult);
document.write(b);

function checkadult(age) {
    return age >= 18;
}
