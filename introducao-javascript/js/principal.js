
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

// selecionando a coluna do IMC
var tdImc = paciente.querySelector(".info-imc");

var pesoEhValido = true;
var alturaEhValida = true;

//validacao do peso
if (peso <= 0 || peso >= 1000) {
    console.log("Peso inválido!");
    tdImc.textContent = "Peso inválido!";
    pesoEhValido = false;
}

//validacao da altura
if (altura <= 0 || altura >= 3.00) {
    console.log("Altura inválida!");
    tdImc.textContent = "Altura inválida!";
    alturaEhValida = false;
}

if (alturaEhValida && pesoEhValido) {
    var imc = peso / (altura * altura);
    tdImc.textContent = imc;    
} else {
    tdImc.textContent = "Altura e/ou peso inválidos!"
}
