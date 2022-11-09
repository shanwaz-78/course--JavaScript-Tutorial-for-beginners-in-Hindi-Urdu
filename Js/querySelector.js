document.querySelector(".hslove").innerText;
document.querySelector(".hslove").style.fontSize = "40px";
document.querySelector("body").style.backgroundColor = "darkgrey";
document.querySelector("#prc").style.color = "red";
document.querySelector("h1").style.fontSize = "22px"
document.querySelector("#xyz").style.backgroundColor = "crimson";
document.querySelector("#xyz").onmouseenter = fn;
document.querySelector("#xyz").onmouseout = fn2;
document.querySelector(".hslove").onmouseenter = fn3;
document.querySelector(".hslove").style.color = "crimson";

const example = confirm("Click Ok To Save This Page.");
if (example) {
    window.print();
} else {
    alert("Thanks For Your Response");
}

function fn() {
    document.querySelector("#xyz").style.backgroundColor = "blue";
}

function fn2() {
    document.querySelector("#xyz").style.backgroundColor = "crimson";
}

function fn3() {
    document.querySelector(".hslove").style.border = "4px solid green"
}
