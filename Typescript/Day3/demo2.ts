//Functions

// 1 Functions without argument & without return type
// 2 Functions with argument & without return type
// 3 Functions without argument & with return type
// 4 Functions with argument & with return type

// 1 Functions without argument & without return type

    function add1(){
        console.log('U r in first type func.')
    }

    // add1();

    // 2 Functions with argument & without return type

    function add2(a:number,b:number){
        console.log("Addition is "+(a+b));
    }

    // add2(2,3);

    // 3 Functions without argument & with return type

    function add3():number{
        return (5+5);
    }

    var res=add3();
    // console.log(`Result is ${res}`);

    // 4 Functions with argument & with return type

    function add4(a:number,b:number):number{
        return (a+b);
    }

    // var res1=add4(4,5)
    console.log(`Addition is => ${add4(8,8)}`)

