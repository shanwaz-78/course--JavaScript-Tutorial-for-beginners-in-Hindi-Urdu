const val = document.createElement("h2");
const val2 = document.createTextNode("This Is Just Text Node");

val.appendChild(val2);

const val3 = document.querySelector("img");

val3.insertAdjacentElement("beforebegin",val)

const ex1 = document.createElement("p");
const ex2 = document.createTextNode("This Is Just Text");
const ex3 = document.createComment("This Is Just Comment");

ex1.appendChild(ex2);

const exval = document.querySelector("img");

exval.insertAdjacentElement("beforeend",ex1)

const table = document.querySelector("footer");

const text = "<h1>This is just text2</h1>";

table.insertAdjacentHTML("afterbegin",text)


