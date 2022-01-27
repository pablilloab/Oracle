let filtro = document.querySelector("#filtrar-tabla");

filtro.addEventListener("input", function() {
    
    let pacientes = document.querySelectorAll(".paciente");
    
    
    if (this.value.length > 0){
        for (let i=0;i < pacientes.length;i++) {
            paciente = pacientes[i];
            tdNombre = paciente.querySelector(".info-nombre");
            nombre= tdNombre.textContent;

            expresion = new RegExp(this.value, "i");
            
            if (!expresion.test(nombre)) {
                paciente.classList.add("filtrar");
            }else{
                paciente.classList.remove("filtrar");
            }
        }
    }else{
        for (let i=0; i < pacientes.length;i++){
            paciente = pacientes[i];
            paciente.classList.remove("filtrar");
        }
    }

})