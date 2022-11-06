/*-document.all;
document.head;
document.body;
 document.links;
document.images;
document.URL;
document.title;
document.domain;*/

   // targeting methods in js.

// document.getElementById("give id name");
// document.getElementsByClassName("give class name");
// document.getElementsByTagName("give tag name");

    // DOM get & set moethods;
    // get method;
// document.getElementsByClassName("relpos").innerHtml;
// document.getElementById("header").innerText;
// document.getElementById("header").getAttribute("id");

    // set method;

    const check = document.getElementById("relpos");

    console.log(check);
    
    const a = document.getElementsByTagName("table");
    console.log(a);

    const d = document.getElementById("xyz").innerHTML = "<h1>BTC</h1>";
    document.getElementById("xyz").innerHTML = "<h1>Hussain</h1>";
    document.getElementById("xyz").setAttribute("style","background-color: red");
    console.log(d);


    const f = document.getElementById("xyz").removeAttribute("style");
    console.log(f);
