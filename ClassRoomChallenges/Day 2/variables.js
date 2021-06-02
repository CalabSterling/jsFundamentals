let myName = "Sterling";
let friendName = "dillan";

console.log(myName.length);
console.log(friendName.length);

if (myName.length > friendName.length) {
    console.log(`My name is longer by ${myName.length - friendName.length} letters.`);
} else if (friendName.length > myName.length) {
    console.log(`My friends name is longer by ${friendName.length - myName.length} letters.`);
} else {
    console.log("Our names are the same length.")
}

let myage = 40;

if (myage === 40)