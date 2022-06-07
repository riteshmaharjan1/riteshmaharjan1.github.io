// var http = require("http");
// http.createServer(function (req, res) {
//     res.writeHead(200, { 'Contenet-Type': "text-html" });
//     res.end("hello");
// }).listen("8092");
function foo() {
    console.log('foo');
}
process.nextTick(foo);
console.log('bar')
let a = 10 + 20 + "pt";
console.log(a);


let array1 = [3,4], num1= 9, array2 = [7,8];
array1 = array1.shift(array2)
console.log("array1",array1);

$("select alyasd > div")