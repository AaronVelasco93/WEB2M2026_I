document.getElementById('calculadora').addEventListener('submit',
    function(event){
        event.preventDefault();
        let num1 =parseFloat(document.getElementById('num1').value);
        let num2 =parseFloat(document.getElementById('num2').value);

        let operador = document.getElementById('operador').value;
        let resutado;

        switch(operador){
            case 'sum':
                resutado= num1+num2;
                break;
            case 'resta':
                resutado=num1+num2;
                break;
            case 'mult':
                resutado=num1+num2;
                break;
            case 'div':
                if(num2!==0){
                    resutado= num1/num2;

                }else{
                    resutado="Error, No se puede dividir entre 0";
                }
                break;
            default:
                resutado="Operador no valido"
                break;
        }


        document.getElementById('resultado').innerHTML= `El resultado es: ${resutado}`;
    }
);