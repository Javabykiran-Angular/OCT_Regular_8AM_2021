//splice method

// if u want to insert data particular location or to remove data from that location 

var a=[12,11,45,63,78,89,25];

// console.log(a);
// a.splice(2,0,99);
// console.log(a);
// a.splice(3,0,100,77,2);
// console.log(a);
// a.splice(3,1);
// console.log(a);
// a.splice(1,3);
// console.log(a);
// a.splice(5,1,2.5);
// console.log(a);

//slice

 var a1=[10,8,77,89,99,45,50,60,21,22,30];
 //It copied a section of array from start index to end index
 var temp=a1.slice(1,7);
 console.log("Original data "+a1);
 console.log('Copied data '+temp);

 var temp2=a1.slice(5,0);
 console.log('Copied data '+temp2);