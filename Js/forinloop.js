const obj = new Object();

obj.firstName = "Shanwaz";
obj.lastName = "Khan";
obj.Age = 18;
obj.Email = "Mohammed.shanwaz78@gmail.com";

for(let check in obj){
    console.log(obj[check]);
}

