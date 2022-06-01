function tets() {
    var x = 10;
    if (x == 10) {
        let y = 5;
        // console.log(y);
    }
    // let a = y;
    // console.log(a);
}

// console.log(x);

tets();

var obj = {
    x: 3,
    x: 5
}

console.log(obj);

var myObj = { a: 2 }
var ano = myObj;

console.log(ano);
myObj.a = 3;

console.log(ano);

if (-1) {
    console.log(5);
}

let str = "Ritesh";
// console.log(str.splice(0, 1));

let myArray = ["apple", "juice", "banana", "grape"];

let newMyArray = myArray.splice(2, 2, "InsertMe");
console.log(myArray);
console.log(newMyArray);
console.log(myArray.length);
// console.log("myarray= " + myArray, "   newMyArray" + newMyArray)

function sum(x, y) {

    return (x + y);
}

console.log(sum(5, 6));

var fe = function (a, b) {
    return a + b;
}
console.log(fe(5, 2));

function a() {
    return {
        a: 1
    };
}

console.log(a());


function caller(fn) {
    fn();
    console.log("caller");
    a2();
}

let ab = function () {
    console.log("a");
};

function a2() {
    console.log("a2");
}

caller(ab);

// let result = mapA.map(function (e, i, a) {
//     return e.length;

// })

let mapA = ["apple", "banana", "cat", "Pears"];
let newArray = [];
let arrayLength = [];

function forArray(mapA) {
    for (let i = 0; i < mapA.length; i++) {
        newArray.push(mapA[i].length);
        if (mapA[i].length >= 5)
            arrayLength.push(mapA[i]);
    }
    console.log(newArray);
    console.log(arrayLength);
}

let elementArray = [];
let indexArray = [];
function returnElement(mapA) {
    for (let i = 0; i < mapA.length; i++) {
        if (mapA[i].length === 5) {
            elementArray.push(mapA[i]);
            indexArray.push(i);
        }
    }
    console.log(elementArray);
    console.log(indexArray);
}

forArray(mapA);

returnElement(mapA);

function findFirstElement(mapA) {
    for (let i = 0; i < mapA.length; i++) {
        if (mapA[i].length === 5) {
            return mapA[i];
        }
    }
}

function findFirstIndex(mapA) {
    for (let i = 0; i < mapA.length; i++) {
        if (mapA[i].length === 5) {
            return i;
        }
    }
}

console.log(findFirstElement(mapA));
console.log(findFirstIndex(mapA));


let array = [{ a: 1, b: 1 }, { a: 2, b: 9 }];

function sumOfArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i].b;
    }
    console.log("sum of b= " + sum);
}

sumOfArray(array);


let stringWord = "String";
function reverse(word) {
    let reverseWord = "";
    for (let i = word.length - 1; i >= 0; i--) {
        reverseWord += word[i];

    }
    console.log(reverseWord);
}

reverse(stringWord);

function f1() {
    return function () {
        return function () {
            console.log("I'm Here!")
        }
    }
}

f1()();

function clicked() {
    // alert(1);
    setTimeout((element) => {
        element.style.backgroundColor = "blue"
    }, 1000, this);
}

let myArray1 = [10, 4, 5, 9];

let result = myArray1.reduce(function (prev, element, index, array) {
    if (prev < element)
        prev = element;
    return prev;
}, 0)

console.log(result)

let salaryArray = [{ name: "ritesh", salary: 100 }, { name: "raj", salary: 1000 }, { name: "ananda", salary: 2000 }]
let salaryResult = salaryArray.reduce(function (prev, element, index, array) {
    prev += element.salary;
    return prev;
}, 0)

console.log(salaryResult);


let maxSalary = salaryArray.reduce(function (prev, element, index, array) {
    if (prev < element.salary)
        prev = element.salary
    return prev;
}, 0)

console.log(maxSalary);

let newArray1 = ["abc", "asd", "ritesh"];
for (let element of newArray1) {
    console.log(element)
}

// let newArray2 = {a:1,b:2,c:3};
// for(let key in newArray2){
//     console.log(key)
//     console.log(key, newArray2(key))
// }

// $(function () {
//     $('#btnClick').click(function () {
//         alert(1)
//     })

//     $(function () {
//         // $("#buttonId").click(function () {
//         //     alert("abc");
//         // });

//         $('#div1.div2').click(function () {

//         })
//         let div1 = document.getElementById("div1")

//         console.log("div1", div1)
//         console.log($("#div1.a"));
//     })

//     $("#div1").prepend("<div>"); //append
// })


function f() {
    let a = 1, b = 20, c;
    console.log(a + " " + b + " " + c);
    function g() {
        let b = 300, c = 4000;
        console.log(a + " " + b + " " + c);
        a = a + b + c;
        console.log(a + " " + b + " " + c);
    }
    console.log(a + " " + b + " " + c);
    g();
    console.log(a + " " + b + " " + c);
}
f();


var x = 10;
function main() {
    console.log("x1 is:" + x);
    x = 20;
    console.log("x2 is:" + x);
    if (x > 0) {
        var x = 30;
        console.log("x3 is:" + x);
    }
    console.log("x4 is:" + x);
    var x = 40;
    var f = function (x) {
        console.log("x5 is:" + x);
    };
    f(50);
    console.log("x6 is:" + x);
}
main();
console.log("x7 is:" + x);


let array11 = [{ a: 1, b: 2 }, { c: 3, d: 4 }];
let cloneArray = []

for (let i = 0; i < array11.length; i++) {
    let obj = [...array11]
    cloneArray.push(obj);
}
// console.log(array11)
cloneArray[0].b = 20;
console.log(array11, cloneArray);

let address = [1,"street", "city"]
let[qa, street]  = address;
console.log(qa,street)