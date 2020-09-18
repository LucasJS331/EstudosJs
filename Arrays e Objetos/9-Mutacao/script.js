let lucas = {
    idade: 30
}

let lucasGemeo = lucas; // Cria um objeto que vai herdar constantemente o objeto alvo e vice-versa

lucasGemeo.idade = 40;
    //alterou a propiedade idade

lucasGemeo.raça = "preta";
    //criou a propiedade raça

console.log(Object.keys(lucas));
    // retornou todas as propiedades ja alteradas e criadas no OBJETO LucasGemeo