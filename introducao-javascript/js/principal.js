
var pacientes = document.querySelectorAll(".paciente"); //captura dados do HTML (classe paciente)

//looping de execuçao
for (var i = 0; i < pacientes.length; i++) 
{       
        var paciente = pacientes[i]; //array p/ armazenar dados do HTML
        
        var tdPeso = paciente.querySelector(".info-peso"); //puxa o peso do HTML
        var peso = tdPeso.textContent; //define o valor do PESO a partir do peso inserido no HTML

        var tdAltura = paciente.querySelector(".info-altura");//puxa o altura do HTML
        var altura = tdAltura.textContent;//define o valor da ALTURA a partir do peso inserido no HTML

        // selecionando a coluna do IMC
        var tdImc = paciente.querySelector(".info-imc");

        var pesoEhValido = true; //variavel de peso valido
        var alturaEhValida = true; //variavel de altura valida

        //validacao do peso
        if (peso <= 0 || peso >= 1000) 
        {   
            pesoEhValido = false;  //define como falso
            console.log("Peso inválido!"); //exibe no console
            tdImc.textContent = "Peso inválido!"; //exibe na tabela do IMC -> HTML
            paciente.classList.add("paciente-invalido"); //CSS
        }

        //validacao da altura
        if (altura <= 0 || altura >= 3.00) 
        {   
            alturaEhValida = false; //define como falso
            console.log("Altura inválida!"); //exibe no console
            tdImc.textContent = "Altura inválida!"; //exibe na tabela do IMC -> HTML
            paciente.classList.add("paciente-invalido"); //CSS
        }z

        if (alturaEhValida && pesoEhValido)  //se ambos forem "true", imprime o IMC
        {
            var imc = peso / (altura * altura); //calcula IMC
            tdImc.textContent = imc.toFixed(2); //definir max de carac. depois da virgula
        }    
}


