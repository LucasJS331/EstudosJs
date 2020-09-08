/*
function com valor DEFAULT(padrão), quando você for chamar essa função e por acaso
não passar o parametro, esse parametro vai ser substituido pelo valor default que você
DEFINIU
*/ 

function soma(a,b=2){
    return a+b;


}

console.log(soma(1));

//mais exemplos

function maiorNum(a,b,c=1000){
    let maior = Math.max(a,b,c);
    console.log(maior);
}

maiorNum(2,3,0);