let obj = {
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
