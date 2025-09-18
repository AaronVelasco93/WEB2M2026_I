/*
    var miCarro = new Object();
    miCarro.marca  = 'Toyota';
    miCarro.modelo = 'supra';
    miCarro.color = 'rojo';

    console.log(miCarro);
*/
/*
    //Ejemplo de arreglo, no es lo mismo que un Objeto
    let frutas=["banana","manzana","pera"];
    console.log(frutas);
*/

/*
    var miCarro = {
        marca: 'Toyota',
        modelo: 'supra',
        color: 'rojo'
    }

    console.log(miCarro);
*/


var perro = {
    nombre: 'Shayla',
    color: 'Sal pimienta',
    edad: 28,
    talla: 'mediana',
    enemigos: ["Otro perro","gatos","baños"]
}

console.log(perro);
// console.log(perro.color);
// console.log(perro.enemigos[1]);
//agregar
perro.raza='schnauzer';

console.log(perro);

//leer
console.log(perro.edad);

//actualizar
perro.edad= 35;
console.log(perro.edad);


//eliminar 
delete perro.edad;
console.log(perro);





