//Inicamos con un arreglo para almacenar tareas
let tareas = [];

// funcion para mostrar el menu de opciones
function mostrarTareas(){
    return parseInt( prompt(`
        Opciones Disponibles:
        1.- Agregar tarea.
        2.-Ver todas las tareas.
        3.-Marcar tarea como completada.
        4.-Salir.
        "Elige una opcion"
        `));
}

//Funcion para agregar tarea 
function agregarTarea(){
    let nombre = prompt("Introduce  el nombre de la tarea");
    if(nombre){
        //agregar una tarea
        let tarea = {
            nombre: nombre,
            completado: false 
        };

        tareas.push(tarea);
        alert("¡La tarea se agrego de manera exitosa!")

    }else{
        alert("El nombre de la tarea no puede estar vacio");
    }
}

//Funcion para ver todas las tareas

function verTareas(){
    if( tareas.length === 0){
        alert("No hay tareas en la lista");
    }else{
        let mensaje = "Lista de tareas";
        tareas.forEach((tarea,index)=>{
            mensaje+=`${index + 1}.- ${tarea.nombre} [${tarea.completado ? "Completada" :"Pendiente"}]\n`;
        });
        alert(mensaje);
    }
}