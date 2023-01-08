const Massege = 'Initial Massege For Testing';


function percentage(num) {
   return num / 600 * 100;
}

console.log(percentage(303))

class User{
    constructor(name,age) {
        this.StudentName = name;
        this.StudentAge = age;
        console.log(`Student Name is ${this.StudentName} & Age is ${this.StudentAge}`);
        console.log('\n');
    }

    Studentdetail(){
        let course = 'B.Tech';
        console.log(`Student name is ${this.StudentName} & Age is ${this.StudentAge} & Doing ${course}`);
    };
}

class inherit extends User{

}
const obj = {
    Massege,percentage,User
}
export  default obj

const Userobj = new User('Shanwaz',19);
const inherited = new inherit();
Userobj.Studentdetail()