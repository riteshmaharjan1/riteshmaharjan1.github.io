let array1 = []; //1. empty array
array1 = [1, 2, { a: 1 }, 4, 5, 6, 7]; //2. added the value in array1
array1[1] = 3; //2. changed the value of element at nth position
console.log(array1);

// delete array1[0]; // 3.delete nth item

// array1 = []; //4. delete Array //empty array

let array2 = array1; //4. copy array; it changes both array1 and array2 if one value is changed
console.log("array1=", array1);
console.log("array2=", array2);
array1[0] = 11;

console.log("array1=", array1);
console.log("array2=", array2);

//
let array3 = [];
//4. copy array using for...loop; Both arrays changes independently without changing the Others
for (let i = 0; i < array1.length; i++) {
    array3[i] = array1[i];
}
console.log("array3=", array3);

array3[0] = 1;

console.log("array1=", array1)
console.log("array3=", array3);

console.log("subset of array3", array3.slice(0, 3)); //5. subset of array
let array4 = array3.slice(0, 3);
console.log("array4=", array4);

console.log(array3.length); //6. length of an array

//splice
// console.log(array3.splice(0,3));
console.log(array3.splice(0, 0, 44));
console.log(array3)

let array5 = [1, 2];

let mergedArray = array1.concat(array5);
console.log(array1)
console.log(mergedArray);

let array7 = [50, 'apple', { a: 1 }];
let array8 = [];
function getTypes(array) {
    for (let i = 0; i < array.length; i++) {
        array8.push(typeof (array[i]));
    }
    return array8;
}

console.log(getTypes(array7));

$(function () {
    $("#buttonId").click(function () {
        alert("abc");
    });

    $('#div1.div2').click(function(){

    })
    let div1 = document.getElementById("div1.div2")
    console.log(div1)
})