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

let mapA = ["apple", "banana", "cat","Pears"];
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
        if (mapA[i].length === 5){
            elementArray.push(mapA[i]);
            indexArray.push(i);
        }
    }
    console.log(elementArray);
    console.log(indexArray);
}

forArray(mapA);

returnElement(mapA);

function findFirstElement(mapA){
    for (let i = 0; i < mapA.length; i++) {
        if (mapA[i].length === 5){
            return mapA[i];
        }
    }
}

function findFirstIndex(mapA){
    for (let i = 0; i < mapA.length; i++) {
        if (mapA[i].length === 5){
            return i;
        }
    }
}

console.log(findFirstElement(mapA));
console.log(findFirstIndex(mapA));
