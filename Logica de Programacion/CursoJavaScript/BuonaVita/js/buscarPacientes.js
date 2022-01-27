let botonBuscarPacientes = document.querySelector("#buscar-paciente");

botonBuscarPacientes.addEventListener("click", ()=>{

    const peticion = new XMLHttpRequest;

    peticion.open("GET", " https://alura-es-cursos.github.io/api-pacientes/pacientes.json");
    peticion.addEventListener("load",()=>{

        let errorAjax = document.querySelector("#error-ajax");        
        
        if (peticion.status == 200) {
            errorAjax.classList.add("filtrar");
            let respuesta = peticion.response;
            let pacientesFromAPI = JSON.parse(respuesta);
            pacientesFromAPI.forEach((paciente)=>{
            agregarPacienteEnLaTabla(paciente);
        })
        }else{
            errorAjax.classList.remove("filtrar");
        }
        
    })

    peticion.send();
    
})

