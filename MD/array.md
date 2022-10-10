# Array .

> * In JavaScript, array is a single variable that is used to store different elements. It is often used when we want to store list of elements and access them by a single variable.
---
        console.log("Let's see Array's");

        var ary = [10,20,30,40,50];
        for(var a = 0; a <= 4; a++){
            document.write("<li>" + ary[a] + "</li>");
        }

      // document.write("get data through the user");
       var ary = new Array[3];

        for(var g = 0; g < 3; g++){
           ary[g] = prompt("Enter The Value");
        }

        for(var a = 0; a < 3; a++){
         document.write("<li>" + ary[a] + "</li>");
        }

        document.write("<strong>This is multidimensional Array<br></strong> ");

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
---
  > * #### [For More Click Over This.](../Js/array.js)
      