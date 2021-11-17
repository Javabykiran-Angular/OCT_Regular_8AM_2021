//array 
//core java array =>
// homogenous data type, size is fixed 
//Typescript
// Array it is growable & shrinkable
// Array does not have any fixed length
// u can store homogenous as well as heterogenous(tuple) data type 
var a = [2, 5, 3, 7, 8];
var a1 = [4, 5, 77, 9, 6];
var a2 = [];
var a3 = [2.5, 'Sumit', true, 8];
// for(let i=0;i<4;i++){
//     console.log(`a[${i}]=${a[i]}`)
// }
// console.log("Array value is "+a);
// console.log("Array is =>>>> "+a.join(' # '));
// console.log("Array is =>>>> "+a.join());
//ForEach
// a.forEach((myvalue,i)=>{
//     console.log(`Value is ${myvalue} & index is ${i}`)
// })
//Rest Parameter Function
//for rest parameter use one operator that we called is as Spread Operator (...)
// function Display(a:number,...item:number[]){
//     console.log("Value of a is "+a)
//     console.log(item);
// }
// Display(7,8,99,10,21,33,45,69);
var a4 = [];
//1 Push & pop Method
//2 Splice Method
// Push & pop 
// It works on LIFO principal Last In First out
a4.push(21);
console.log(a4);
a4.push(44, 25, 11);
console.log(a4);
var res = a4.pop();
console.log(a4);
console.log("Poped Value is " + res);
