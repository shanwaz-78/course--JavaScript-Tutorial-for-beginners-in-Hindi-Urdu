//document.write("Slice Array");

var a = ["Saleh","Danish","Fayaz","Hussain","Mujahid"];
document.write(a + "<br>");
var b = a.slice(1,4);
document.write(b + "<br>");

//document.write("Splice Array");      

var a = ["Saleh","Danish","Fayaz","Hussain"];
document.write(a + "<br>");
a.splice(-4,1,"Ibrahim");
document.write(a);
