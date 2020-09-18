let carros = "bwm,fuscao,golf";

let exibicao = carros.split(","); //split retorna uma string em um array e separa elas por , ; ou espaços

let frase = exibicao.join(" "); // Join retorna array em uma frase string e separa elas por , ; ou espaços

console.log(frase);

// outro exemplo

let itens = ["a","b","c"];


itens = itens.join("  ");

console.log(itens);