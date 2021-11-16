//anonymous Functions
var temp1 = function () {
    console.log("anonymous Function is called");
};
// temp1();
var temp2 = function (a, b) {
    return (a + b);
};
// var res=temp2(4,5);
// console.log(`Result is ${res}`)
// Fat Arrow function/Arrow Function
var temp3 = function () {
    console.log("Fat Arrow function is called");
};
// temp3();
var temp4 = function (a, b) {
    return (a + b);
};
// let res=temp4(7,6);
// console.log('Addition is '+res);
// optional parameter function
function add1(a, b) {
    console.log("Value of a is " + a); //5
    console.log("Value of b is " + b); //undefined
    console.log("Addition of a+b is " + (a + b)); //NAN => Not a number
}
// add1(5);
// add1(4,2);
//Default Parameter Function
function add2(a, b) {
    if (b === void 0) { b = 6; }
    console.log("Value of a is " + a); //4
    console.log("Value of b is " + b); //8
    console.log("Addition of a+b is " + (a + b)); //12
}
// add2(4);
add2(4, 8);
