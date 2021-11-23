"use strict";
exports.__esModule = true;
exports.pi = exports.add1 = exports.Myclass = void 0;
//public private & protected
var Myclass = /** @class */ (function () {
    function Myclass(f, l, id) {
        this.fname = f;
        this.lname = l;
        this.id = id;
    }
    Myclass.prototype.Display = function () {
        console.log("\n        First Name  :: " + this.fname + "\n        Last Name   :: " + this.lname + "\n        ID          :: " + this.id + "\n    ");
    };
    return Myclass;
}());
exports.Myclass = Myclass;
// let obj=new Myclass("Sumit","Raokhande",9);
// obj.Display();
function add1(a, b) {
    return (a + b);
}
exports.add1 = add1;
exports.pi = 3.14;
