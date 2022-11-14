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

const check = document.createElement("li");
const check2 = document.createTextNode("Yunus");
check.appendChild(check2);

const additon = document.querySelector("ul").appendChild(check)

const replace1 = document.createElement("li");
const replace2 = document.createTextNode("Mujahid");
replace1.appendChild(replace2);

const changes1 = document.querySelector("ul");
const changes2 = changes1.children[2];
changes1.replaceChild(replace1,changes2);

const newelement = document.createElement("li");
const newelement2 = document.createTextNode("Adnan");
newelement.appendChild(newelement2);

const newtext = document.querySelector("ol");
newtext.appendChild(newelement);

    document.querySelector("#input-box").addEventListener("input",function () {
        const target = this.value;
        document.querySelector("div").innerHTML = target;
    })

    document.querySelector("#select-box").addEventListener("change",function () {
        const target = this.value;
        document.querySelector("div").innerHTML = target;
    })

    document.querySelector("#pwd-box").addEventListener("input",function () {
        const target2 = this.value;
        document.querySelector("div").innerHTML = target2;
    })

    document.querySelector("#submit-btn").addEventListener("click",function () {
        const val = document.querySelector("#input-box").value;
        alert("hello" + " " + val );
    })
