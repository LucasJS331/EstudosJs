let lucas = {
    "idade": 20,
    "cor": "preta",
    "amigos": ["Pedro","Sarah","Lucas P"]
} 
// esse é o padrao JSON

let pessoa = JSON.stringify(lucas); // transformando JSON Em String

console.log(pessoa);

let lu = JSON.parse(pessoa);

console.log(lu);