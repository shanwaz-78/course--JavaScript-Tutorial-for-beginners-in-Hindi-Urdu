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

function fn() {
    document.querySelector("#xyz").style.backgroundColor = "blue";
}

function fn2() {
    document.querySelector("#xyz").style.backgroundColor = "crimson";
}

function fn3() {
    document.querySelector(".hslove").style.border = "4px solid green"
}

document.querySelector(".hslove").addEventListener("mouseenter",function () {
document.querySelector(".hslove").addEventListener("mouseout",function () {
    this.style.backgroundColor = "green";
    this.style.backgroundColor = "none";
})
})

document.querySelector("#prc").addEventListener("mouseenter",function () {
    this.style.border = "3px dotted red"
    this.style.fontSize = "45px";
})

document.querySelector("table").addEventListener("mouseenter",function () {
    this.style.border = "5px solid red";
})

document.querySelector("input").style.borderRadius = "25px";
document.querySelector("input").addEventListener("mouseenter",function() {
document.querySelector("input").addEventListener("click",function () {
document.querySelector("input").addEventListener("mouseout",function () {
    this.style.backgroundColor = "white";
})   
    const button1 = confirm("Ok To save the page");
if (button1) {
    window.print()
}else{
    alert("Thanks For You're Response");
} 
    this.style.backgroundColor = "#23ff";
})
    this.style.backgroundColor = "green";
   
})
