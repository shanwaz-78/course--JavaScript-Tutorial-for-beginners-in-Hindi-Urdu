var hs = [12,16,18,13,20];
document.write(hs + "<br>");

var b = hs.filter(valueofadults);
document.write(b);

function valueofadults(ages) {
    return ages >= 18;
}