const a = "<h2>Just For Example</h2>";
const b = document.querySelector("h5");
b.insertAdjacentHTML("afterbegin",a)

const c = document.createElement("li");
const d = document.createTextNode("Apple");
c.appendChild(d);

const e = document.querySelector("ol");
const f = e.children[0];
e.replaceChild(c,f);

const val1 = document.querySelector("ol").children[2];
const val2 = val1.cloneNode(true);

const val3 = document.querySelector("ul").appendChild(val2);

const checkval = document.createElement("li");
const checkval2 = document.createTextNode("fayaz");

checkval.appendChild(checkval2);

document.querySelector("ol").appendChild(checkval);

const replaceChild = document.createElement("li");
const replaceChild2 = document.createTextNode("zunaid");
replaceChild.appendChild(replaceChild2);

const ulchanges = document.querySelector("ul");
const ulchanges2 = ulchanges.children[2];
ulchanges.replaceChild(replaceChild,ulchanges2)

const returnval = "<h1>Khwaja Garib Nawaz</h1>";

const returnval2 = document.querySelector("ul");
returnval2.insertAdjacentHTML("afterbegin",returnval)