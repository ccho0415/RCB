function Class(students, teacher, location, subject, tas, startTimeOfTheClass, endTimeOfTheClass, classClown, capacity){
    this.students= students;
    this.teacher= teacher;
    this.location= location;
    this.subject= subject;
    this.tas= tas;
    this.startTimeOfTheClass= startTimeOfTheClass;
    this.endTimeOfTheClass= endTimeOfTheClass;
    this.classClown= classClown;
    this.capacity = capacity;
    this.addStudent =  function(student){
        if(this.students.length<this.capacity){
            this.students.push(student); 
        }      
    }    
}
// Another solution
// Class.prototype.addStudent = function(student){
//     if (this.students.length < this.capacity){
//         this.students.push(students);
//     }
// }
 function Student(firstName, lastName, age, grade, awake, gender, hometown, favoritePizzaTopping){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age= age;
    this.grade= grade;
    this.awake= awake;
    this.gender= gender;
    this.hometown= hometown;
    this.favoritePizzaTopping= favoritePizzaTopping; 
}
var rcb = new Class([],"earl gray", "here", "coding",["christian","tammer","albert"],"6:30", "never", "Matt", 4);
var stanley = new Student("Stanley", "Tiu", "24","Graduated",false,"potato", "Edison", "pepperoni");
rcb.addStudent(stanley);
console.log(rcb);
