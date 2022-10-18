//document.write("Slice Array");

var a = ["Saleh","Danish","Fayaz","Hussain","Mujahid"];
document.write(a + "<br>");
var b = a.slice(1,4);
document.write(b + "<br>");

//document.write("Splice Array");      

var a = ["Saleh","Danish","Fayaz","Hussain"];
document.write(a + "<br>");
a.splice(2,0,"Ibrahim");
document.write(a + "<br>");