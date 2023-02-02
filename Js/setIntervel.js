let nval = 0;
const nval2 = setInterval(function () {
  if (nval == 30) {
    clearInterval(nval2);
  }
  nval += 10;
  const checkval = document.querySelector("#animation");
  checkval.style.marginLeft = nval + "px";
}, 1000);