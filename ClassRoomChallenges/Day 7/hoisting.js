/*
HOISTING - variables and functions are being commited to memory. Contrary to what the name might suggest nothing being moved.
*/

console.log(firstName);
let firstName = "Sterling";
console.log(firstName);

exampleScope();

function exampleScope() {
    console.log("I HAVE BEEN HOISTED!");
}

function petName(name) {
    console.log (`My cat's name is ${name}.`);
}

petName("Connor");

petName("Connor");

funciton petName(name) {
    console.log(`My cat's name is ${name}.`);
}

console.log(hello);

var hello = "hi";