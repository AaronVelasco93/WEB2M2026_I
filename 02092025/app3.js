//Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
let numeroMaquina = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
console.log(numeroMaquina);



let numUser= parseInt(prompt("Adivina el Numero magico"));
let vidas = 3;
/*
AND  &&
0 1 0
1 0 0
0 0 0
1 1 1 ->
*/

while( numeroMaquina  !== numUser && vidas > 1 ){
    vidas --;
    numUser = parseInt(prompt("Vuelve a intentar adivinar el numero Magico. Vidas->"+vidas));

}

if(numUser === numeroMaquina){
    alert("Ganaste")
}else{
    alert("Perdiste")
}
