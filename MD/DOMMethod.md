>/*-document.all;
document.head;
document.body;
 document.links;
document.images;
document.URL;
document.title;
document.domain;*/

  * // targeting methods in js.

>// document.getElementById("give id name");
// document.getElementsByClassName("give class name");
// document.getElementsByTagName("give tag name");

* // DOM get & set moethods;
    // get method;
 >document.getElementsByClassName("relpos").innerHtml;
// document.getElementById("header").innerText;
// document.getElementById("header").getAttribute("id");

* // set method;

>/* const check = document.getElementById("relpos");

console.log(check);
    
>const a = document.getElementsByTagName("table");
    console.log(a);

> const d = document.getElementById("xyz").innerHTML = "<h1>BTC</h1>";
 document.getElementById("xyz").innerHTML = "<h1>Hussain</h1>";
document.getElementById("xyz").setAttribute("style","background-color: red");
    console.log(d);


>const f = document.getElementById("xyz").removeAttribute("style");
    console.log(f);*/

>const prc = Math.ceil(23.4);
    console.log(prc);

>const prc2 = Math.round(8.7);
    console.log(prc2);

>const prc3 = Math.trunc(23.4);
    console.log(prc3);

>const prc4 = Math.cbrt(8);
    console.log(prc4);

>const prc5 = Math.sqrt(64)
    console.log(prc5);
    
* const hs = new Date();

>console.log(hs.getFullYear()+ "/" + hs.getDay() + "/" + hs.getDate());

---
> * ### [For More Click Over This.](../Js/DOMmethods.js)