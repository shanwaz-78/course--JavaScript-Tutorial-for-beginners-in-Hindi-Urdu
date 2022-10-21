console.log("Let's see Function");

function Yahoo() {
   console.log("This is Function");
}

Yahoo();

function name(fname, lname) {
   console.log(fname + lname);
}

name("learners", "learners");

document.write("Let's see event");
function learners() {
   document.write("This is Event in JavaScript<br>");
}

function table(num) {
   for (let a = 1; a <= 10; a++) {
      document.write(num * a + "<br>");
   }
}

table(3);

function names(data) {
   for (let hs = 0; hs < data.length; hs++) {
      console.log(data[hs])
   }
}

names(["Saleh", "Danish"]);
names(["Moien", "Aman"]);




