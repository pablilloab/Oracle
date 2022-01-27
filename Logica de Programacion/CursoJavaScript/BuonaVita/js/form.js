let botonAdicionar = document.querySelector("#adicionar-paciente");

botonAdicionar.addEventListener("click", (event)=>{
    event.preventDefault();    
    let form = document.querySelector("#form-adicionar");
    let paciente = capturarDatosFormulario(form);

    let errores = validarPaciente(paciente);

    if(errores.length > 0) {
        return mostrarErrores(errores);
    }
    
    agregarPacienteEnLaTabla(paciente);

    form.reset();
    
    let wrapperErrores = document.getElementById("#error");
    error.innerHTML = "";
    
});

function agregarPacienteEnLaTabla (paciente) {
    let pacienteTr = crearPacienteTr(paciente);
    let pacienteTb = document.querySelector("#tabla-pacientes");

    pacienteTb.appendChild(pacienteTr);
}


function capturarDatosFormulario (form) {
    
    //Capturo datos del formulario y retorno un objeto con ellos.
      
    let paciente = {
        nombre: form.nombre.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calcularImc(form.peso.value, form.altura.value)

    }

    
    return paciente;
    

}




function crearPacienteTr (paciente) {

    //Creo el tablerow con los datos del paciente.

    let pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente")


    pacienteTr.appendChild(crearTd(paciente.nombre, "info-nombre"));
    pacienteTr.appendChild(crearTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(crearTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(crearTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(crearTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function crearTd (dato, nombreClase) {
    //Creo tabledata generico para poder aplicar las clases a todos.

    let td = document.createElement("td");
    td.textContent = dato;
    td.classList.add(nombreClase);

    return td;
}

function validarPaciente (paciente) {
    let errores = [];

    if (paciente.nombre.length == 0){
        errores.push("El nombre no puede estar vacío");
    }

    if (paciente.peso.length == 0){
        errores.push("El peso no puede ser 0");
    }

    if (paciente.altura.length == 0){
        errores.push("La altura no puede ser 0");
    }

    if (paciente.gordura.length == 0){
        errores.push("La gordura no puede ser 0");
    }
    
    if(!validarPeso(paciente.peso)) {
        errores.push("Peso incorrecto");

    }
    if (!validarAltura(paciente.altura)) {
        errores.push("Altura incorrecta")
    }

    return errores;
}

function mostrarErrores (errores) {
    let ul = document.querySelector("#error");
    ul.innerHTML = "";

    errores.forEach((error)=>{
        let li = document.createElement("li");
        li.textContent = error;
        ul.appendChild(li);
    })

    
}