 // função que recebe e soma dois numeros
function somaNumeros(a,b){
    return a + b;
    
}

console.log(somaNumeros(12,44));

   // criando e armazenando valor de variaveis atraves de uma função criada
let resultado = somaNumeros(3,1);


let resultado2 = somaNumeros(400000000000393384, 333);

console.log(`o resultado e ${resultado} e ${resultado2}`);

// função que recebe idade e cnh para verificar se o usuario esta apto a dirigir
function autoEscola(idade, cnh){
    if(idade >= 18 && cnh == true){
        console.log("pode dirigir");
    } else {
        console.log("não pode dirigir");
    }

}

console.log(autoEscola(17,false));

let motorista = autoEscola(18,true);

console.log(motorista);