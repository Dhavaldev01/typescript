// class 
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// class Person {
//     name : string;
//     age : number;
//     hobbies : string[];
//     constructor(name:string,age:number,hobbies:string[]){
//         this.name = name;
//         this.age = age;
//         this.hobbies = hobbies;
//     }
// }
// /// instance of a class
// const Person1: Person = new Person("dhaval",22,['cricket ', 'singing']);
// console.log(Person1);
// const Person2: Person = new Person("patel",18,['cricket ', 'singing']);
// console.log(Person2);
// const Person3: Person = new Person("prince",20,['cricket ', 'singing']);
// console.log(Person3);
// inheritance and super keyword
var Person = /** @class */ (function () {
    function Person(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    //method 
    Person.prototype.introduce = function () {
        return "Hi , I'm ".concat(this.name, " I'm ").concat(this.age, " i like ").concat(this.hobbies, ". ");
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, hobbies, grade) {
        var _this = _super.call(this, name, age, hobbies) || this;
        _this.grade = grade;
        return _this;
    }
    Student.prototype.introduce = function () {
        return "Hi , I'm ".concat(this.name, " I'm ").concat(this.age, " my garde is ").concat(this.grade, " i like ").concat(this.hobbies, ". ");
    };
    return Student;
}(Person));
/// instance of a class
var Person1 = new Person("dhaval", 22, ['cricket ', 'singing']);
console.log(Person1.introduce());
var Person2 = new Person("patel", 18, ['cricket ', 'singing']);
console.log(Person2);
var student = new Student("prince", 20, ['cricket ', 'singing'], 1);
console.log(student.introduce());
