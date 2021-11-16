//anonymous Functions

let temp1=function (){
    console.log("anonymous Function is called")
}
// temp1();

   let temp2= function (a:number,b:number):number{
        return (a+b);
    }

    // var res=temp2(4,5);
    // console.log(`Result is ${res}`)

    // Fat Arrow function/Arrow Function

    var temp3 = ()=>{
            console.log("Fat Arrow function is called")
        }

    // temp3();

    let temp4=(a:number,b:number):number=>{
        return (a+b);
    }

    // let res=temp4(7,6);
    // console.log('Addition is '+res);

// optional parameter function

function add1(a:number,b?:number){
    console.log("Value of a is "+a);//5
    console.log("Value of b is "+b);//undefined
    console.log("Addition of a+b is "+(a+b));//NAN => Not a number
}

// add1(5);
// add1(4,2);

//Default Parameter Function

function add2(a:number,b:number=6){
    console.log("Value of a is "+a);//4
    console.log("Value of b is "+b);//8
    console.log("Addition of a+b is "+(a+b));//12
}

// add2(4);
// add2(4,8);

//Rest parameter Function
