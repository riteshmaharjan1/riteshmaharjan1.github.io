let obj = {
    a: 1, b: [1, 5], c: "string", d: { x: 1, y: 2 }
}

function convertObjectToArray(obj) {
    let array = [];
    for (let key in obj) {
        array.push(key + JSON.stringify(obj[key]))
    }
    return array;
}

function convertObjectToArrayTest(obj) {
    let array = [];
    for (let key in obj) {
        console.log(obj[key] instanceof Array);
        // if(obj[key] instanceof Array)
        if (!obj[key] instanceof Array) {
            if (typeof obj[key] == "object") {
                for (let ele in obj[key]) {
                    console.log(obj[key] instanceof Array)
                    // if (!obj[key] instanceof Array) {
                    //     // array.push(key + obj[key])
                    // }
                }

            }
        } else {
            // array.push(key + JSON.stringify(obj[key]))
            array.push(key + obj[key])
        }
    }
    return array;
}

let miniObj = [{ a: 1, b: 2 }, { a: 2, b: 4 }];
function minifyObject(object) {
    let miniObj = [];
    for (key in object) {
        let obj = {};
        obj.a = object[key].a;
        miniObj.push(obj)
    }
    return miniObj;
}
let ageArray = [{ name: 'Ram', age: 20 },
{ name: 'Lakshman', age: 15 }];

function findOldestPerson(ageArray) {
    let oldestPerson = "";
    let oldestAge = 0;
    for (let key of ageArray) {
        if (oldestAge < key.age) {
            oldestAge = key.age;
            oldestPerson = key.name;
        }
    }
    return oldestPerson;
}

function findYoungestPerson(ageArray) {
    let youngPerson = ageArray[0].name;
    let youngAge = ageArray[0].age;
    for (let key of ageArray) {
        if (youngAge > key.age) {
            youngAge = key.age;
            youngPerson = key.name;
        }
    }
    return youngPerson;
}

function findYounger(ageArray) {
    let younger = {};
    for (let key of ageArray) {
        if (key.age <= 17 && key.age >= 15) {
            younger = key
        }
    }
    return younger;
}
// console.log(convertObjectToArray(obj));
console.log(convertObjectToArrayTest(obj));
// console.log(minifyObject(miniObj));
// console.log(findOldestPerson(ageArray));
// console.log(findYoungestPerson(ageArray));
// console.log(findYounger(ageArray));
module.exports = { convertObjectToArray, minifyObject, findOldestPerson, findYoungestPerson, findYounger }