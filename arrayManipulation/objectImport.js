const objectReview = require('./objectReview');

//Object Review
let obj = {
    a: 1, b: [1, 2], c: "string", d: { x: 1, y: 2 }
}
let miniObj = [{ a: 1, b: 2 }, { a: 2, b: 4 }];
let ageArray = [{ name: 'Ram', age: 20 },
{ name: 'Lakshman', age: 15 }];
console.log("convertObjectToArray=> ", objectReview.convertObjectToArray(obj));
console.log("minifyObject=> ", objectReview.minifyObject(miniObj));
console.log("findOldestPerson=> ", objectReview.findOldestPerson(ageArray));
console.log("findYoungestPerson=> ", objectReview.findYoungestPerson(ageArray));
console.log("findYounger=> ", objectReview.findYounger(ageArray));