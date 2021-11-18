//json Object
//java script Object Notation
//key & value pair

var jsonObj={
    fname:'Sumit',
    "lname":'Raokhande',
    id:2
}
// u can retrive a data in 2 ways
//1 dot operator
//2 square operator

//1 dot operator
// console.log(`
//     First Name  :: ${jsonObj.fname}
//     Last Name   :: ${jsonObj.lname}
//     Id          :: ${jsonObj.id}
// `);

//2 square operator

console.log(`
-------------------------------
First Name  :: ${jsonObj["fname"]}
Last Name   :: ${jsonObj['lname']}
Id          :: ${jsonObj['id']}
`);

//Array of object

var arrobj=[

];