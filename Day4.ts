// class 


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


class Person {
    name : string;
    age : number;
    hobbies : string[];

    constructor(name:string,age:number,hobbies:string[]){
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
        //method 

        introduce() : string {
            return `Hi , I'm ${this.name} I'm ${this.age} i like ${this.hobbies}. `
        }
    
}

class  Student extends Person {
    grade : number;

    constructor(name:string,age:number,hobbies:string[],grade :number){
        super(name,age,hobbies);
        this.grade = grade;
    }

    introduce() : string {
        return `Hi , I'm ${this.name} I'm ${this.age} my garde is ${this.grade} i like ${this.hobbies}. `
    }
} 

/// instance of a class
const Person1: Person = new Person("dhaval",22,['cricket ', 'singing']);
console.log(Person1.introduce());

const Person2: Person = new Person("patel",18,['cricket ', 'singing']);
console.log(Person2);

const student: Student = new Student("prince",20,['cricket ', 'singing'],1);
console.log(student.introduce());
