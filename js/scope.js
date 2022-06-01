//Sample Comments

// function main() {//var x;
//     console.log("x1 is:" + x);//undefined? x is declared but not yet assigned,
//     //there is local varaible with same name.
//     x = 20;
//     console.log("x2 is:" + x);//20? assign local variable
//     if (x > 0) {
//         var x = 30;//
//         console.log("x3 is:" + x);//30?local variable is reassigned.
//     }
//     console.log("x4 is:" + x);//30 (209) var is function scope, so you can read it out of block
//     var x = 40;
//     var f = function (x) {
//         console.log("x5 is:" + x);//50 x is parameter, x is called with 50(217)
//     };
//     f(50);
//     console.log("x6 is:" + x);//40 (213)local variable is assigned 40,
// }
// main();
// console.log("x7 is:" + x);//10 (213, 209) local declaration of x inside the function.

// 1.
let grapes = "green";

function fruits() {
    return function (message) {
        return grapes;
    };
}

console.log(fruits()()); //prints green : fruits()() calls annonymous function of fruits and grapes is defined globally

// 2.
let x = 10;

function globalVar() {
    return function () {
        return x;
    };
}

x = 20;

let fn = globalVar();

console.log(fn()); //prints 20 : x is set to 20 before call fn() function

// 3.
function sport(message) {
    message = "Hi";
    return function (message) {
        return message;
    };
}

let sportFn = sport("Hello");

console.log(sportFn()); //retuns undefined: message is parameter in line 59, and no parameter is passed.

// // 4.
function test(x) {
    x = 10;
    x++;
    console.log(x);
    return function () {
        return x++;
    };
}
console.log(test(2)()); // returns 11

// // 5.
function car() {
    let color = "white";
    function seat() {
        let color = "brown";
        console.log(color); //___________
    }
    console.log(color); //___________  White
}

car("black"); // only white willbe printed.

// 6.
function department() {
    let numberOfDepartments = 5;
    console.log(numberOfDepartments);
    function software() {
        let language = "javascript";
        console.log(language);
    }

    console.log(language);
}

department(); //error : language is not defined

// // 7.
function department(language) {
    let numberOfDepartments = 5;
    console.log(numberOfDepartments);
    function software() {
        let language = "javascript";
        console.log(language);
    }

    console.log(language);
}

department("java"); // 5 and java is printed

// function add(x) {
//     console.log("x", x);
//     return function (y) {
//         console.log("y", y);
//         return x + y;
//     };
// }

// var addTwo = add(2);

// // console.log(add(2));

// // addTwo(4) === 6; // true
// // add(3)(4) === 7; // true

// console.log(addTwo(4));
// console.log(add(3)(4));
