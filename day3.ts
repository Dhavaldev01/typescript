// Generics
// Generics = Create reusable components like a react 
// that is working to the multiple data type 
// T = is the placeholder  
//  Type = T pan lakhay



// function logAndReturn <T>(value:T):T {
//     return value;
//     }
//  console.log(logAndReturn(true));
//  console.log(logAndReturn<boolean>(true));
//  console.log(logAndReturn<string>("dhaval"));
//  console.log(logAndReturn<number>(11));

// task 
    ///  {1}
// function logAndReturn <T>(value:T):T {
//         return value;
//    }

//    console.log(logAndReturn(<number>(4 + 5)));
//    console.log(logAndReturn<string>("jhgnhg" + "mgmhnn"));
//    console.log(logAndReturn(""+""));
   
 
// {2}

//    function add <T>(A : T , B : T ): T{
//     //@ts-ignore 
//     return A + B ;
//    }

//    console.log(add<number>(4 , 5));

//    console.log(add<string>("jhgnhg" ,"mgmhnn"));
//   //@ts-ignore 
//    console.log(add<null>("",""));
   
// {3}

// function add <T,U>(A : T , B : U ) {
//     //@ts-ignore 
    
//     return A + B ;
//    }

//    console.log(add<number,number>(4 , 5));

//    console.log(add<string ,number>("jhgnhg  " , 5));



/// type script in that 3 way to represent object 
// 1 - object types
// 2 - interface type 
// 3 - type alies 
/// interface in typrscript

//  interface greed  {
//     name : string;
//     Age : number
//  }

//  const preson1 : greed = {
//     name : "dhaval ",
//     Age : 23
//  }

//  const preson2 : greed = {
//     name : "dhaval ",
//     Age : 23
//  }

//  console.log(preson1.name);
// console.log(preson2);

 
