// class Student{
//     constructor (){
//         this.id = 1;
//         this.name = "mahi"
//     }
// }

// const student1 = new Student();
// const student2 = new Student();
// console.log(student1, student2);


// class Student{
//     constructor (sId, sName){
//         this.id = sId;
//         this.name = sName;
        
//     }
// }

// const student1 = new Student(12,"jannat");
// const student2 = new Student(22,"fahim");
// console.log(student1, student2);


class Student{
    constructor (sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "rajbari primary school"
        
    }
}

const student1 = new Student(12,"jannat");
const student2 = new Student(22,"fahim");
console.log(student1, student2);