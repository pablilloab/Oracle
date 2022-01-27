let tabla = document.querySelector("#tabla-pacientes");

tabla.addEventListener("dblclick",(event)=>{

    event.target.parentNode.classList.add("fadeOut");

    setTimeout(()=>{
        event.target.parentNode.remove();
    },500)
    
})

