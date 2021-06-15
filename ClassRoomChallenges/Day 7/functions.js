greeting();

function greeting() {
    console.log(`Hello world`);
}

//Expression
//Expression order matters. can't call the function before its defined. Expressions can't be hoisted.

var greetingExpression = function (){
    console.log("Hello World");
};

greetingExpression(); 

//create a function that, when invoked, lists out hte numbers 1-10
//Use a for loop

function loop() {
    for (i=1; i<=10; i++){
        console.log(i);
    };
}

loop();

//Parameters
//function parameters are palce holders for data that we pass into a funciton when calling or 'invoking' the function

function studentGreeting(name) {
    console.log(`Greeting ${name}`);
}

studentGreeting(`Sterling`);

function greeting(firstName, lastName) {
    let fullName = `${firstName} ${lastName}`
    console.log(`hello my name is ${fullName}`)
};

greeting(`Debbie`, `Cakes`);

function area(length, width) {
    let areaCalc = length*width;
    return areaCalc;
}

let area1 = area(4,10);
console.log(area1);

function volume(length, width, depth){
    let volCalc = length*width*depth;
    return volCalc;
}

let volume1 = volume(5,5,5);
console.log(volume1);

function total(bill){
    let totalPrice = bill * .15 + bill;
    return totalPrice
}

let payment = total(19.52);
console.log(payment.toFixed(2));

function age(dogAge) {
    let humanAge = (dogAge-2)*4+21
    return humanAge
}

let newAge = age(5)
console.log(newAge)