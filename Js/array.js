        console.log("Let's see Array's");

      var HS = [10,20,30,40,50];
        for(var a = 0; a <= 4; a++){
          console.log(HS[a]);
        }
     
       // document.write("get data through the user");
       /* var ary = new Array[3];

        for(var g = 0; g < 3; g++){
            ary[g] = prompt("Enter The Value");
        }

        for(var a = 0; a < 3; a++){
            document.write("<li>" + ary[a] + "</li>");
        }*/

        document.write("<br>");
        document.write("<strong>This is multidimensional Array</strong><br>");

      var HS = [
            ["Saleh Majeed",21,"Male","B.Tech"],
            ["Danish",18,"Male","BCA"],
            ["Shanwaz",18,"Male","BCA"],
            ["Hussain",18,"Male","BCA"]
      ];
      document.write("<table border='1px' cellspacing='3px'>")
      for(var a = 0; a < 4; a++){
        document.write("<tr>");
        for(var b = 0; b < 4; b++){
          document.write("<td>" + HS[a][b] + "</td>")
        }
        document.write("</tr>");
      }
      document.write("</table>")


     /* document.write("<B>Array<br></b>");

     var HS = ["Saleh Majeed",18,"Male","B.Tech<br>"];
      document.write(HS);

      document.write("<b>I Modify The Array<br></b>");
      HS[1] = 19;
      document.write(HS + "<br>");
    
      document.write("<b>I Delete The index 1 of previous array</b><br>");
      delete HS[3];
      document.write(HS + "<br>");

      document.write("This is sort array<br>");

      var a = ["Shanwaz","Danish","Uzair","Saleh Majeed"];
      document.write(a + "<br>");
      
      a.sort();
      document.write(a + "<br>");

      document.write("This is reverse array<br>");
      a.reverse();
      document.write(a);*/