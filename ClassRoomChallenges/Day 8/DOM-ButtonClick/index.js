let team1Points = document.getElementById("team1points");

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

initializePoints1();
