/*let team1Points = document.getElementById("team1points");

function initializePoints() {
    team1Points.innerText = 0;
}

initializePoints();

function team1Add(){
    let points = parseInt(team1Points.innerText);
    points++;
    team1Points.innerText = points;
}

function team1Sub(){
    let points = parseInt(team1Points.innerText);
    if (points === "0"){
        alert(`You cannot go below 0.`)
    } else {
    points--;
    team1Points.innerText = points;
    }
}

let team2Points = document.getElementById(`team2points`);

function team2Add(){
    let points = parseInt(team2Points.innerText);
    points++;
    team2Points.innerText = points;
}

function team2Sub(){
    let points = parseInt(team2Points.innerText);
    points--;
    team2Points.innerText = points;
}

function initializePoints1() {
    team2Points.innerText = 0;
}

initializePoints1();*/

/*see if you can create a new function: function calculatePoints
takes 2 parameters teamName and points..
inside the function you need to be able to add or subtract points to the correct team*/

let team1Points = document.getElementById("team1points");
let team2Points = document.getElementById(`team2points`);


function calculatePoints(teamName, points){
    if(teamName==="team1"){
        let point = parseInt(team2Points.innerText) + points;
        team1Points.innerText = point;
    } else if(teamName==='team2'){ 
        let point = parseInt(team2Points.innerText) + points;
        team1Points.innerText = point;
    }
};

calculatePoints();

function initializePoints1() {
    team2Points.innerText = 0;
}

initializePoints1();

function initializePoints() {
    team1Points.innerText = 0;
}

initializePoints();