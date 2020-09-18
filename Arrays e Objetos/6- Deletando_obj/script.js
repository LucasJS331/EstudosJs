let pessoa = {
    aniver: "20/10",
    nome: "Lucas"
}

delete pessoa.aniver; // exclui propiedade do objeto

console.log(pessoa.aniver);

pessoa.aniver = "Dougras"; // adiciona propiedade ao objeto

console.log(pessoa.aniver);