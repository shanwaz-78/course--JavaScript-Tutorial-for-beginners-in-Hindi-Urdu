let val1 = 0;
const val2 = setInterval(function () {
  val1 += 10;
  if (val1 == 40) {
    clearInterval(val2);
  }
  const target = document.querySelector("#animation");
  target.style.width = val1 + "px";
}, 1000);