console.log("Let's see Array's");

var HS = [10,20,30,40,50,60,70,80,90,100];
for(var a = 0; a<HS.length; a++){
  console.log('shanwaz' + HS[a])
}

// document.write("get data through the user");
/* var ary = new Array[3];

 for(var g = 0; g < 3; g++){
     ary[g] = prompt("Enter The Value");
 }

 for(var a = 0; a < 3; a++){
     document.write("<li>" + ary[a] + "</li>");
 }*/

var HS = [
  ["Saleh Majeed", 21, "Male", "B.Tech"],
  ["Danish", 18, "Male", "BCA"],
  ["Shanwaz", 18, "Male", "BCA"],
  ["Hussain", 18, "Male", "BCA"]
];

document.write("<table border='1px' cellspacing='3px'>")
for (var a = 0; a < 4; a++) {
  document.write("<tr>");
  for (var b = 0; b < 4; b++) {
    document.write("<td>" + HS[a][b] + "</td>")
  }
  document.write("</tr>");
}
document.write("</table>")
