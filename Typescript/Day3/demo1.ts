//type Assertion it work properly on any data type,object data type
// for propely working we required any data type or object data type

var a:any;

// we can perform type assertion o two way 
// 1 angle bracket syntax
// 2 as syntax

//1 angle bracket 

var temp=(<string> a);
// temp.

// 2 as syntax
 var temp1=(a as string);
//  temp1.

//Control Statement
//if, if-else, if-elseif-else,
//switch, break,continue

//Loop
//while,do-while,for,foreach

// if(21<4){
//     console.log("Condition is true");
// }else{
//     console.log("Condition is false")
// }

// var choice=21;
// switch(choice){
//     case 1: console.log("U r in case 1");
//             break;
//     case 2: console.log("U r in case 2");
//              break;
//     default: console.log("U R in Default case");
// }

//while

var count=4;

// while(count!=0){
//     console.log("Count is "+count);
//     count--;
// }

// do{
//     console.log("Count is "+count);
//         count--;
// }while(count!=0)

// for(var i=0;i<4;i++){
//     console.log("Value of I is "+i)
// }
// console.log("Value of i After loop==> "+i);

//var has global scope 
//let has scope is nearest within a block({})

// for(let j=0;j<4;j++){
//     console.log("Value of j is "+j)
// }

// console.log("Value of f After loop==> "+j);

//const => constant
// const has global scope
// const b=45;
const b=2.5; 
console.log(b)
