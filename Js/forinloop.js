const obj = new Object();

obj.firstName = "Shanwaz";
obj.lastName = "Khan";
obj.Age = 18;

for(let check in obj =>{
    console.log(obj[check]);
});
