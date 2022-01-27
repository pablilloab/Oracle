//console.log("todo linkeado ok");

let pacientes = document.querySelectorAll(".paciente");

for (i = 0; i < pacientes.length; i++){

    let paciente = pacientes[i];

    let tdPeso = paciente.querySelector(".info-peso");
    let peso = tdPeso.textContent;


    let tdAltura = paciente.querySelector(".info-altura");
    let altura = tdAltura.textContent;

    let tdImc = paciente.querySelector(".info-imc");
    tdImc.textContent = calcularImc(peso, altura);




    if (!validarPeso(peso)) {
        pesoEsValido = false;
        tdImc.textContent = "Peso Invalido";
        paciente.classList.add("paciente-incorrecto");
    }

    if (!validarAltura(altura)){
        alturaEsValido = false;
        tdImc.textContent = "Altura Invalida";
        paciente.classList.add("paciente-incorrecto");
    }

    
}

function calcularImc (peso, altura) {
    let imc = peso / (altura * altura);
    return imc.toFixed(2);

}

function validarPeso (peso) {
    if (peso >= 0 && peso < 1000) {
        return true;
    }else {
        return false;
    }
}

function validarAltura (altura){
    if (altura > 0 && altura < 5){
        return true;
    }else {
        return false;
    }
}


