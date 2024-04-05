// type Product = {
//     name : string;
//     quntaty: number;
//     price:number;
//     color:string;
//  }
// const product:Product = {

//     name : "leptop",
//     quntaty: 1 ,
//     price:1000, 
//     color: "red "
// }
// const product1:Product = {

//     name : "leptop",
//     quntaty: 1 ,
//     price:1000, 
//     color: "red "
// }

// const calculateTotalPrice = (product:Product)=> `${product.name} total cost ${product.price * product.quntaty}`

// console.log(calculateTotalPrice(product));

// type student ={
//     name:string;
//     age:number;
//     gender?:string;
//     greet:(contry:string)=> string // method call signature 

// }
// const student1:student = {
//     name:"dhaval ",
//     age:23,
//     gender:"male",
//     greet:(contry):string =>`Welcome My name is ${student1.name } , I am ${student1.age} year lod ${contry}`
   
// }
// const student2:student = {
//     name:"dhaval ",
//     age:13,
//     greet:(contry):string =>`Welcome My name is ${student2.name } , I am ${student2.age} year lod ${contry}`
   
// }

// const introduction1 : (student1:student) => string = (student1:student): string => { 
//       const {name , age } = student1;
//         return `Welcome My name is ${name } , I am ${age } year lod `;
// }

// //console.log(introduction1(student1));
// //console.log(student1.greet("india"));


// type friend = {
//     name:string;
//     age:number;
//     mo:number;
//     add?:string; 
//     greet:(contry:string)=>string
// }

// const friend:friend = {
//     name:"DHAVAL",
//     age : 12,
//     mo : 3021568945,
//     add:"surat",
//     greet:(contry):string =>`Welcome My name is ${friend.name } , I am ${friend.age} year lod ${contry}`
// }
// const friend1:friend = {
//     name:"DHAVAL",
//     age : 12,
//     mo : 3021568945,
//     greet:(contry):string =>`Welcome My name is ${friend1.name } , I am ${friend1.age} year lod ${contry}`
// }
// const friend3:friend = {
//     name:"DHAVAL",
//     age : 12,
//     mo : 3021568945,
//     // @ts-ignore
//     add?:"surat",
//     greet:(contry):string =>`Welcome My name is ${friend3.name } , I am ${friend3.age} year lod ${contry}`
// }

// console.log(friend.greet("india"));

// enum role {
//     user ="user",
//     admin = "admin"
// }

// type logindetails = {
//     name?:string;
//     email:string;
//     password:string;
//     role:role

// }

// const user1:logindetails ={
//     email:"dhaval@gmail.com",
//     password:"123",
//     role:role.admin
// }

// const user2:logindetails ={
//     email:"piyushval@gmail.com",
//     password:"123",
//     role:role.user
// }

// const isadmin : (user1: logindetails) => string = (user1:logindetails) : string => {
//     const {email, role } = user1;
//     return role === "admin" ? `${email} is allow to edit website ` : `${email} is not allow to edit the Website`
// }
// console.log(isadmin(user1));
// console.log(isadmin(user2));

// tuples

// type PersonInfo  = readonly[string,number,boolean]


// const Person1:PersonInfo = ['DHAVAl',29,true];
// const Person2:PersonInfo = ['DHAVAl1',20,false];
 


// const displaypersonInfo : (person1:PersonInfo) => void = (person1:PersonInfo): void => {
//     const [name, age, dl] = person1;
//     console.log(`name:${name}, age:${age}, dl:${dl ? "yes" : "no"}`);    
// }

// displaypersonInfo(Person1);
// displaypersonInfo(Person2);

//// union  mate (|) & intersection mate (&) vaper vu 


// const inputvalue : () => () => {}

// const userInput :( value:string|number ) => void = (value:string|number ): void  =>{
//     if(typeof value === "number"){
//         //@ts-ignore
//         return value * 2;
//     }else if(typeof value === "string"){
//         //@ts-ignore
//         return value.toUpperCase();
//     }else {
//         throw new Error("invaild input")


//     }
// }
// console.log(userInput(10));
// console.log(userInput("dhaval"));

/// union 


// type person ={
//     name : string;
//     age : number
// }

// type Employee = {
//     emp_id : number;
//     department : string
//     }

// type employeeDetails = person | Employee

// //@ts-ignore
// const unionD:employeeDetails ={
//     name : 'DHAVAL',
//     department : "cgpit "
// }

// console.log(unionD);


//// intersation 

// type person ={
//     name : string;
//     age : number
// }

// type Employee = {
//     emp_id : number;
//     department : string
//     }

// type employeeDetails = person & Employee

// const intersationD:employeeDetails ={
//     name : 'DHAVAL',
//     age : 12,
//     emp_id : 1,
//     department : "cgpit "
// }

// console.log(intersationD);


/// task 

// type User = {
//     name : string;
//     age : number;
// }

// type MYLocation = {
//     city : string;
//     country : string;
// }

// const user:User ={name : "dhaval",age : 22}
// const mylocation:MYLocation = {city :"surat", country : "india"}

// const createuserprofile:(user:User ,mylocation:MYLocation ) => void = (user:User ,mylocation:MYLocation): void => {
//     //@ts-ignore
//     //return `My name is ${user.name } and ${mylocation.city}`
//     return {...user, ...mylocation}
// }

// console.log(createuserprofile(user,mylocation));


