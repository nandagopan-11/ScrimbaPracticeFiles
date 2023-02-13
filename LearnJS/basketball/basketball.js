
function hAdd1(){
    let hScore = document.getElementById("home-score-el");
    let hVal = parseInt(hScore.textContent);
    //console.log(hVal)
    hVal += 1;
    hScore.textContent = hVal;
}

function hAdd2(){
    let hScore = document.getElementById("home-score-el");
    let hVal = parseInt(document.getElementById("home-score-el").textContent);
    //console.log(hVal)
    hVal += 2;
    hScore.textContent = hVal;
}

function hAdd3(){
    let hScore = document.getElementById("home-score-el");
    let hVal = parseInt(document.getElementById("home-score-el").textContent);
    //console.log(hVal)
    hVal += 3;
    hScore.textContent = hVal;
}

function gAdd1(){
    let gScore = document.getElementById("guest-score-el");
    let gVal = parseInt(document.getElementById("guest-score-el").textContent);
    //console.log(gVal)
    gVal += 1;
    gScore.textContent = gVal;
}

function gAdd2(){
    let gScore = document.getElementById("guest-score-el");
    let gVal = parseInt(document.getElementById("guest-score-el").textContent);
    //console.log(gVal)
    gVal += 2;
    gScore.textContent = gVal;
}

function gAdd3(){
    let gScore = document.getElementById("guest-score-el");
    let gVal = parseInt(document.getElementById("guest-score-el").textContent);
    //console.log(gVal)
    gVal += 3;
    gScore.textContent = gVal;
}

function reset(){
    let hScore = document.getElementById("home-score-el");
    let gScore = document.getElementById("guest-score-el");
    hScore.textContent = 0;
    gScore.textContent = 0;
}