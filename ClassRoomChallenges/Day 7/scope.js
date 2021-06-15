//scope is how a computer keeps track of all the variables
//global scope is like earth and everything belongs to global
//local scope is like a city everything inside belongs to local & global but no other local

let x = "declard outside fo the function";

function exampleScope() {
    let x = "declared in the function";
    console.log(x);
    console.log(`We are inside the function exampleScope`);
};

exampleScope();
console.log(x, "this is line 14")

let color = "blue";

function skyColor() {
    color = "pink";
    console.log(color); //pink
}

skyColor();
console.log(color); //pink because we didn't redeclare in color in the function just initialized


/*
VAR - scoped to the nearest function block
LET - scoped to the nearest enclosing block
CONST - cannot be reinitilaized
*/

var color = "blue";

function skyColor() {
    var color = "pink";
    if(1 == 1) {
        var color = `purple`;
        console.log(color);
    };
    console.log(color);
}

skyColor();
console.log(color);

let color = "blue";

function skyColor() {
    let color = "pink";
    if(1 == 1) {
        let color = "purple";
        console.log(color);
    }
    console.log(color);
}

skyColor();
console.log(color);