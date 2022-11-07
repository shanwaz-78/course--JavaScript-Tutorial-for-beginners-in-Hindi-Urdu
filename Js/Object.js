const obj = {
    fname: "Shanwaz",
    lname: "Khan",
    Age: 18,
    Qualification: "BCA",
    Array: ["Saleh", 21, "Male", "B.Tech"],
    salary: function () {
        return 200000;
    },
    otp: function () {
        return this.fname + " " + this.lname;
    },
};
console.log(obj.otp());


const check = new Object();

check.firstName = "Saleh";
check.lastName = "Majeed";
check.Age = 21;


console.log(check.firstName + " " + check.lastName + " " + check.Age)