# If-Else Statement.

> The If-Else statement executes a block of code if a specified condition is true. If the condition is false, another block of code can be executed.

* Like ->

var per = prompt("Please Enter Your Percentage");
       
>if (per >= 80 && per <= 100){
  console.log("You are in merit");
}else if (per >= 60 && per <= 80){
  console.log("You are Ist Division");
}else if (per >= 45 && per <= 60){
  console.log("You are IInd Division");
}else if (per >= 33 && per <= 45){
  console.log("You are IIIrd Division");
}else if (per < 33){
  console.log("You are Fail");
}else{
  console.log("Please Enter Valid Percentage");
}  

console.log("let's see If Statement")

>var a = 100;
var b = 80;
if(a > b){
    console.log("A is Greater")
}

> var a = 100;
var b = 80;
if(b < a){
    console.log("B is Smaller")
}

> console.log("let's see If else Statement")

var T = 60;

>if (T > 30){
console.log("T is Greater");
}else{
console.log("T is Smaller");
}       

//alert("This is alert");
var H = confirm("Learners");

> if (H){
alert("Saleh's Student");
}else{
alert("Thanks For Reading");
}
