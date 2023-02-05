

let style = document.getElementById("body-header");
style.innerHTML = `<link rel="stylesheet" href="unitConverter-light.css"></link>`;
let mode = false;

function change(){
    mode = !mode;
    if(mode){
        style.innerHTML = `<link rel="stylesheet" href="unitConverter-dark.css"></link>`;
    }
    else{
        style.innerHTML = `<link rel="stylesheet" href="unitConverter-light.css"></link>`;
    }
    
}

let len = document.getElementById("len-data");
let vol = document.getElementById("vol-data");
let mass = document.getElementById("mass-data");

function convert(){

    let numIn = document.getElementById("num-in").value;
    let n = parseFloat(numIn);

    if(isNaN(n)) n = 1;
    
    let feet = (n*3.281).toFixed(3);
    let meters = (n/3.281).toFixed(3);
    let gallon = (n*0.264).toFixed(3);
    let litres = (n/0.264).toFixed(3);
    let pound = (n*2.204).toFixed(3);
    let kilos = (n/2.204).toFixed(3);

    len.textContent = `${n} meters = ${feet} feet | ${n} feet = ${meters} meters`;
    vol.textContent = `${n} litres = ${gallon} gallon | ${n} gallon = ${litres} litres`;
    mass.textContent = `${n} kilos = ${pound} pound | ${n} pound = ${kilos} kilos`;

}

