let devs = [1,2,3,4,5,6,7];

/* SLICE mostra os elementos do array desejado! Primeiro indique o primeiro INDICE(primeiro elemento a
    mostrar) e depois o ultimo indice menos 1(o ultimo elemento a mostrar) */

console.log(devs.slice(0,6))    
console.log(devs.slice(0,3));
    //: 1,2,3
console.log(devs.slice(-3)); // mostra os 3 ultimos numeros
    //: 5,6,7

console.log(devs.slice(0,-2)); // mostra o primeiro até o ultimo sem os dois ultimos NUMEROS