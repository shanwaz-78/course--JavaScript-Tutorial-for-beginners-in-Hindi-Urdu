class User {
  constructor(fname, lname) {
    this.firstName = fname;
    this.lastName = lname;
    console.log(
      `Firstname is ${this.firstName} & second name is ${this.lastName}`
    );
  }

  details() {
    let course;
    console.log(
      `Firstname is ${this.firstName} & last name is ${this.lastName} & course is ${this.course}`
    );
  }
}

const obj = new User(10, 15, 3);
obj.course = "BCA";
obj.details();

class User2 {
  constructor(first, second, third) {
    this.num = (first + second) / third;
    console.log(this.num);
  }
}

const obj2 = new User2(10, 15, 5);
