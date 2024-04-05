"use strict";
// // function sum(a:number,b:number):number{
// //     return a+b
// // }
// // console.log(sum(10,5));
// // console.log(sum(110,5));
// // Type Annotation
// let myFavNum:number = 5;
// let MyAge:number = 29
// let pi : number = 3.14
// let myNegval:number = -5
// // let invalidResult:number = myAge + "years";
// // console.log(invalidResult);
// // let invalidValue:number = "123" ;
// // let comutedVlue:number = Math.sqrt(12);
// // console.log(comutedVlue);
// // string
// // let myFullname = "Dhaval Patel"
// // let myFirstname = "patel"
// // let myLastname = "Dhaval"
// // myFullname = myFirstname + myLastname
// // console.log(myFullname);
// // to do length :
//  let sentance:string = "please subscribe my youtube channel"
//  let sentanceLength = sentance.length;
//   // console.log(sentanceLength);
//  // string conver to uppercase and lowercase 
//  let text:string = "please subscribe my youtube channel"
//  let uppercase:string = text.toUpperCase();
//  let lowercase:string = text.toLowerCase();
//  // console.log(uppercase +" & " + lowercase);
//  // boolean data type 
//  function isEven(a:number):boolean{
//     return (a % 4 | a % 8 ) == 0
//  }
//   // console.log(isEven(40));
//  // big int type 
//  /// let bignumber: bigint = 9007199254740992n;
// //  console.log(bignumber);
// //  let anotherBigNumber:bigint = ("9007199254740992n");
// //  console.log(anotherBigNumber);
//  // Any type 
// //  let myFavNum:any = 5;
// //  myFavNum = 'daval'
// //  myFavNum = 'prince' 
// //  console.log(myFavNum)
//  // Function dicaration 
// //  function greet(name,id){
// //     console.log(`welcome, ${name} and your id is ${id}`);
// //  }
// //  greet("Dhaval",1);
// // arrow function 
// // const  greet1 = (name:string , id:number) =>{
// //     console.log(`welcome, ${name} and your id is ${id}`);
// //  }
// //  greet1("Dhaval",1);
// // fuction return type
// const  greet1 = (name:string , id:number): string =>{
//         return `welcome, ${name} and your id is ${id}`
//       }
// // console.log(greet1("Dhaval",1));  
// const isPalindrome = (palin:string):boolean =>{
//     let mypalin = palin.split("").reverse().join("");
//     return mypalin === palin
// }
// // console.log(isPalindrome("12321"))
// // type infrance = meanig of that varabile name ani type  jatej api de == a compler kare 
// // optional & default parameter 
// // optional parameter deva mate ? no vaparas karvo 
// const greet3 = (name:string ,id?:number) =>{
//     if(id){
//         return `welcome ${name } and ur is ${id} `
//     }else {
//         return `Welcome , ${name}`
//     }
// }
// // console.log(greet3("dhaval"))
// // console.log(greet3("dhaval" ,1))
// // Array in TS
// // a] Using square brackets
// const numbers:number[] = [1,2,3,4,5,6,7]
// //b]  Using the array constructor
// const number1:number[] = new Array(1,2,3,4,5,6,7);
// //c] Using the Array.of method
// // const names:string[] = Array.of("dhaval", "prince","niraj")
// // console.log(names[1])
// // console.log(names.length)
// // Arrays in typeScript come with built-in methode that allow to perform common operation 
// const fruits: string[] = ["apple" ,"banana","orange","mango"];
// // console.log(fruits);
// const newUpdated = fruits.push("kivi");
//  // console.log(newUpdated);
// // console.log(fruits);
// // const lastUpdated = fruits.pop("kivi");
// // console.log(lastUpdated);
// // console.log(fruits)
// // iteration 
// //for loop
// // for(let i = 0 ; i < fruits.length; i++ ){
// //     console.log(fruits[i]);
// // }
// // for of ma value male ==> apple , banana, orange ,mango
// // for (const fruit of fruits){
// //     console.log(fruit);
// // }
// // for in vaparo yto index male ==> 0,1,2,3
// // for (const fruit in fruits){
// //     console.log(fruit);
// // }
// // for . for each method
// // fruits.forEach((curVal:string)=> console.log(curVal))
// // map method ma new array banave ==> am ae muted(change no kare ) no kare
// // map method badha element nr target kare 
// const number3:number[] = new Array(1,2,3,4,5,6,7);
// // Doubling each number
// const doubleData:number[]  = numbers.map((curval:number)=>curval * 2)
// // console.log(doubleData)
// // Converting numbers to strings
// const numberTOstring = number3.map((curElm:number)=>curElm.toString());
// // console.log(numberTOstring);
// // filler method 
// // fillering event numbers
// //@ts-ignore
// const evenNumbers:number[] = numbers.filter((curElm:Number) => curElm % 2 === 0  );
// // console.log(evenNumbers);
// // Fillering numbers grater then 3 
// const graterThen3 = number3.filter((culElm:number) => culElm > 3)
// console.log(graterThen3);
