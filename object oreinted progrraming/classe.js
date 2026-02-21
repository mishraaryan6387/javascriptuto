// inheritencce 


class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    logMe(){
        console.log(`My name is ${this.name} and I am ${this.age} years old.`);
    }
}

class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }   

}

const stuent1 = new Student("Alice", 20, "A");
stuent1.logMe();
