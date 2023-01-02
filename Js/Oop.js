class studnet {
  // sum of variales through method.
  sum() {
    c = a + b - 4;
    console.log(c);
  }

  constructor(name, age) {
    this.studnetname = name; // This is properties of class; *(This is new method to assign properties & there value)
    this.studnetage = age;
    console.log("This is Constructor Method.");
    console.log(
      `Student Name Is ${this.studnetname} & Age Is ${this.studnetage}`
    );
  }

  details() {
    let course;
    console.log("This is just for practice");
  }

  courseName() {
    console.log(
      `Student name is ${this.studnetname} & Age is ${this.studnetage} & doing course is ${this.course}`
    );
  }
}

let a = 5;
let b = 10;
let c;

const obj = new studnet("Shanwaz", 19);
obj.course = "B.Tech"; // this is old method to assign value of property of class;
obj.details();
obj.courseName();
obj.sum();
