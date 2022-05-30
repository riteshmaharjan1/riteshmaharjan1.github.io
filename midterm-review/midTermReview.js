//Create
let obj = { a: 1 }

//delete
obj = null;


//Copy/Clone Objects
let obj1 = obj;

let newObject = { a: 1, b: "abc", x: [1, 2], d: { a: 1, b: 2 } }
let clone = {};
//Clone object
for (let i in newObject) {
    // console.log(i); //returns the key
    // console.log(newObject[i]); //return value
    clone[i] = newObject[i]

}
console.log(clone);

//find if this particular "value"exists in the object
for (let key in newObject) {
    // if(newObject[i][key])
    // console.log(typeof newObject[key])
    if (typeof newObject[key] === "string") {
        console.log(newObject[key]);
    }
}


// for(let key in newObject){
//     if(newObject[key])
// }

var method3 = new Array('Hello', 'MY', 'Name');
console.log(method3);

function arrayMaker(n) {
    if (n !== typeof Array) {
        return Array.prototype.slice.call(arguments)
    }
}

var b = arrayMaker({ 7: 1 }, { 2: 3 });
console.log(b);

var array6 = [[1, 2, 3], [4, 5, 6]];
// var array6[0].length = [[1, 2, 3], [4, 5, 6]]

// array6.length = 2;
array6[0].length = 3
console.log(array6);

var a = ['zero', 'one', 'two', 'three'];
var names = ['jason', 'john', 'peter', 'karen'];

var sliced = a.slice(2, 3);
var spliced = names.splice(0,3);

console.log(sliced); // creates a new array ['one', 'two'] 
console.log(a); 
console.log(spliced);
console.log(names);