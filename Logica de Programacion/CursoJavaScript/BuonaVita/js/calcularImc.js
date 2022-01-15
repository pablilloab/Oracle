//console.log("todo linkeado ok");

let pacientes = document.querySelectorAll(".paciente");

for (i = 0; i < pacientes.length; i++){

    let paciente = pacientes[i];

    let tdPeso = paciente.querySelector(".info-peso");
    let peso = tdPeso.textContent;


    let tdAltura = paciente.querySelector(".info-altura");
    let altura = tdAltura.textContent;

    let tdImc = paciente.querySelector(".info-imc");



    let pesoEsValido = true;
    let alturaEsValido = true; 

    if (peso < 0 || peso > 1000) {
        pesoEsValido = false;
        tdImc.textContent = "Peso Invalido";
        paciente.classList.add("paciente-incorrecto");
    }

    if (altura < 0 || altura > 5) {
        alturaEsValido = false;
        tdImc.textContent = "Altura Invalida";
        paciente.classList.add("paciente-incorrecto");
    }

    if (pesoEsValido && alturaEsValido) {
        let imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2); 
    }

}

function calcularImc (peso, altura) {
    let imc = peso / (altura * altura);
    return imc.toFixed(2);

}




