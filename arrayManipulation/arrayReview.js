let array = [1, 2, 3, 4, 5, 6, 7];
let uniqueArray = [1, 1, 2, 3, 44, 5, 6, 6, 7, 7]
let difftype = [50, "apple", { a: 1 }];

function odd(array) {
    let oddArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 != 0) {
            oddArray.push(array[i])
        }
    }
    return oddArray;
}

function even(array) {
    let evenArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            evenArray.push(array[i])
        }
    }
    return evenArray;
}

function sumOdd(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 != 0) {
            sum += array[i];
        }
    }
    return sum;
}

function sumEven(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            sum += array[i];
        }
    }
    return sum;
}

function uniqueNumbers(array) {
    let unique = [];
    let a = array[0];
    for (let i = 0; i < array.length; i++) {
        if (a != array[i]) {
            unique.push(a);
        }
        a = array[i]
    }
    return unique;
}

function getTypes(element) {
    let type = "";
    let typeArray = [];
    for (let i = 0; i < element.length; i++) {
        type = typeof element[i];
        typeArray.push(type)
    }
    return typeArray
}

function destructureArray(element) {
    let type = "";
    let key = "";
    let value = "";
    let typeArray = {};
    for (let i = 0; i < element.length; i++) {
        key = typeof element[i] + i;
        value = element[i];
        typeArray[key] = value;
    }
    return typeArray;
}

function firstOddNum(element) {
    let index = 0;
    for (let i = 0; i < element.length; i++) {
        if (element[i] % 2 !== 0) {
            index = i;
            break;
        }
    }
    return index
}

let string = "ritesh";
function convertToArray(string) {
    let array = [];
    for (let i = 0; i < string.length; i++) {
        array.push(string[i]);
    }
    return array;
}

let arrayString = ['r', 'i', 't', 'e', 's', 'h'];
function converArrayToString(stringArray) {
    let string = "";
    for (let i = 0; i < arrayString.length; i++) {
        string = string.concat(arrayString[i])
    }
    return string;
}


// console.log(convertToArray(string));
// console.log(converArrayToString(arrayString));
module.exports = { odd, even, sumOdd, sumEven, uniqueNumbers, getTypes, destructureArray, firstOddNum, convertToArray, converArrayToString }



