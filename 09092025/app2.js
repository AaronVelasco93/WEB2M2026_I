const frutas = ["Banana"];

frutas.push("sandia"); //final
frutas.unshift("mango");//inicio
frutas.push("pera"); //final
frutas.unshift("fresa");//inicio

console.log(frutas);

//completo
for( let fruta of frutas ){
    console.log(fruta);
}

//eliminar
console.log("------------------------------------------");
frutas.pop(); //Elimina al final

for( let fruta of frutas ){
    console.log(fruta);
}

console.log("------------------------------------------");
frutas.shift();//Elimina a el principio
for( let fruta of frutas ){
    console.log(fruta);
}



/*
//MAL
    const puerto=3306;
    puerto = 3308;
    console.log(puerto);
*/


