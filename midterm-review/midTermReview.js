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