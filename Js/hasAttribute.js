const target = document.querySelector("footer");
const target2 = document.querySelector("#prc");
const value = target.contains(target2);
console.log(value);

const select = document.querySelector("select").addEventListener("change",function () {
    const val = this.value;
    document.querySelector("div").innerHTML = val;
    document.querySelector("div").style.border = "2px solid black";
    document.querySelector("div").style.backgroundColor = "darkgrey";
})

const check = document.querySelector("h5");
const check2 = document.querySelector("#xyz");
const check3 = check.contains(check2)
console.log(check3)