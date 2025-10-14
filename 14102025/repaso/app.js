let invenatrio =[];
function mostrarMenu(){
    //2
    return parseInt(prompt(
        `Opciones disponibles
         1.- Agregar producto
         2.- Mostrar todos los pruductos
         3.- Buscar producto por nombre
         4.- Salir 
         Elige una opcion:   
        `
    ));
}

function agregarProducto(){
    let nombre = prompt("Ingresa el nombre del producto:");
    let cantidad = parseInt(prompt("Ingresa la cantidad del producto"));
    let precio = parseFloat(prompt("Ingresa el precio del producto"));

    if( cantidad > 0 && precio > 0 ){
        let producto = {
            nombre: nombre,
            cantidad:cantidad,
            precio: precio
        };

        invenatrio.push(producto);
        alert("Producto agregado");

    }else{
        alert("Cantidad y precio deben ser numeros positivos");

    }

}

function mostrarProducto(){
    if( invenatrio.length === 0 ){
        alert("Inventario vacio");
    }else{
        let mensaje = "Productos del inventario \n";
        for(let i = 0; i< invenatrio.length; i++){
            mensaje+=`Producto: ${i+1}\n`+
                     `Nombre: ${invenatrio[i].nombre}\n`+
                     `Precio: ${invenatrio[i].precio}\n`+
                     `Cantidad: ${invenatrio[i].cantidad}\n`+
                     "-------------------------------------";          
        }
        alert(mensaje);
    }
}

function buscarProducto(){
    let nombreBuscar=prompt("Introduce el nombre del producto a buscar:");
    let encontrado = false;
    for(let i = 0; i<invenatrio.length; i++ ){
        if(invenatrio[i].nombre.toLowerCase()=== nombreBuscar.toLocaleLowerCase()){
            alert(`
                Producto encontrado: \n
                Nombre: ${invenatrio[i].nombre}
                Cantidad: ${invenatrio[i].cantidad}
                Precio: ${invenatrio.precio}
                `);
                encontrado=true;
                break;
        }
    }
    if(!encontrado){
        alert("Producto no encontrado");
    }
}

function iniciarPrograma(){
    let continuar = true;

    while(continuar){
        let opcion = mostrarMenu();
        switch(opcion){
            case 1:
                agregarProducto();
                break;
            case 2:
                mostrarProducto();
                break;
            case 3:
                buscarProducto();
                break;
            case 4:
                alert("Salir del programa ...");
                    continuar = false;
                break;
            default:
                alert("Opcion no valida. Intenta nuevamente");
        }
    }
    alert("Programa Finalizado.");
}

iniciarPrograma();