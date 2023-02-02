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

// This is default method to export
export default function () {
  Massege,User,percentage
}

export {Massege,User,percentage};
// This is very easy method to export data.

const Userobj = new User('Shanwaz',19);
const inherited = new inherit();
Userobj.Studentdetail()