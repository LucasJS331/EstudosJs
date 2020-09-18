let filho = {
    nome: "lucas",
    idade: 20,

}

let mae = {
    conhecimento: "cozinha",
}

Object.assign(filho,mae);
/* object.assing copia as propiedades de um objeto e cola no objeto alvo! Primeiro passe o objeto alvo e 
depois passe o objeto que vai ser copiado. */

console.log(filho);