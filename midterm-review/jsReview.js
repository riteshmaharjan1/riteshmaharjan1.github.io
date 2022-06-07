// var x = 10;
// function mainFUN() {
//     console.log("x1 is:" + x); x = 20;
//     console.log("x2 is:" + x);
//     if (x > 0) {
//         var x = 30;
//         console.log("x3 is:" + x);
//     }
//     console.log("x4 is:" + x);
//     var x = 40;
//     var f = function (x) {
//         console.log("x5 is:" + x);
//     };
//     f(50);
//     console.log("x6 is:" + x);
// }
// mainFUN();
// console.log("x7 is:" + x);


// x = 0;
// hello();
// console.log(
//     x
// );


// var x;

// function hello() {
//     var i = 0
//     for (var i = 0; i < 11; i++) {
//         i = 90;
//         {
//             i = 10;
//         }
//     }
//     console.log(i);
// }


// let main = [{ a: 1, b: 2 }, { c: 4, d: 4 }];
// let mainCHECK = [1, 2, 3, 4, 5];
// let cloned = [];

// for (let i = 0; i < main.length; i++) {
//     let portion = main[i];
//     let a = {};
//     for (let key in portion) {
//         a[key] = portion[key];
//     }

//     cloned.push(a);
// }

// cloned[0].a = 4000;  //cloned issue
// console.log(main);
// console.log(cloned);


// let clonedArray = [...mainCHECK];
// clonedArray[0].a = 0990909;
// mainCHECK[1] = 90909090;
// console.log(mainCHECK);
// console.log(clonedArray);

// const address = [221, "Baker Street", "London"];
// const [houseNo, , city] = address;
// console.log(houseNo, city)// 221 'London’
// const details = { firstName: 'Code', lastName: 'Burst', age: 22 };
// const { firstName, age } = details;
// console.log(firstName, age);// Code 22


// let thisobj = {
//     a: 1,
//     b: function (x, y) {
//         console.log(this, x, y);
//     }
// }

// let fn = thisobj.b;
// fn()
// // fn();
// // thisobj.b(2,3);


// let obj = {
//     a: 1,
//     inner: function () {
//         console.log(this);
//         c = () => {
//             console.log("this is arrow => ", this);
//             d = () => console.log("this is inner", this);
//             d();
//         }
//         c();
//     }, more: function () {
//         console.log("MORE => ", this);
//         function te() {
//             console.log("MORE inner => ", this);
//         }
//         te();
//     }
// }
// let p = obj.inner;
// p();
// obj.inner(); //takes parent this, () is used as inner

//  obj.more(); //takes global this as inner function

let a = [1, 2, 312, 32, 13]
// let b = a.slice(1,2)
let b = a.splice(1,2,3)
console.log(b) //2,312
console.log("a", a)

// a.unshift("21");
// console.log("aa",a)


// let x = 10;
// function main(x) {
//     console.log("x1 is:" + x);//2
//     x = 20;
//     console.log("x2 is:" + x);//20
//     if (x > 0) {
//         let x = 30;
//         console.log("x3 is:" + x);//30
//     }
//     console.log("x4 is:" + x);//20
//      x = 40;
//     let f = function (x) {
//         console.log("x5 is:" + x);//50
//     };
//     f(50);
//     console.log("x6 is:" + x); //40
// }
// main(2);
// console.log("x7 is:" + x);//10

// var x = 10;
// function main() {
//     console.log("x1 is:" + x); //undefined
//     x = 20;
//     console.log("x2 is:" + x); //20
//     if (x > 0) {
//         let x = 30;
//         console.log("x3 is:" + x);//30
//     }
//     console.log("x4 is:" + x); //30
//     var x = 40;
//     var f = function () {
//         console.log("x5 is:" + x); //40
//         x = 100;
//     };
//     f(50);
//     console.log("x6 is:" + x); //100
// }
// main();
// console.log("x7 is:" + x); //10

