const arrayReview = require('./arrayReview');

//Array Review
let array = [1, 2, 3, 4, 5, 6, 7];
let uniqueArray = [1, 1, 2, 3, 44, 5, 6, 6, 7, 7]
let difftype = [50, "apple", { a: 1 }];
let arrayString = ['r', 'i', 't', 'e', 's', 'h'];
let string = "ritesh";

console.log("odd=> ", arrayReview.odd(array));
console.log("even=> ", arrayReview.even(array));
console.log("sumOdd=> ", arrayReview.sumOdd(array));
console.log("sumEven=> ", arrayReview.sumEven(array));
console.log("uniqueNumbers=> ", arrayReview.uniqueNumbers(uniqueArray));
console.log("getTypes=> ", arrayReview.getTypes(difftype));
console.log("destructureArray=> ", arrayReview.destructureArray([50, 'apple', { a: 1 }]));
console.log("firstOddNum=> ", arrayReview.firstOddNum(array));
console.log("convertToArray=> ", arrayReview.convertToArray(string));
console.log("converArrayToString=> ", arrayReview.converArrayToString(arrayString));