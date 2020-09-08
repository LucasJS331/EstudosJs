 /*
    A Closure são funções que tem outras funções dentro. Elas GUARDA os parametreos passados pela primeira
    função e as funções que estão dentro delas são retornadas e assim pondendo ser armazenadas numa variavel

 
 */
function soma(a){
    let resultado = a;
    function somador(b){
        let resultadoFinal = a+b;
        console.log(resultadoFinal);
    }

    return somador;
}


let complicado = soma(4);

complicado(4);

// outro exemplo

function multi(num1){
   return function multi2(num2){
        return num1 * num2;
    }

}

let Multiplicador = multi(2);

console.log(Multiplicador(2));


