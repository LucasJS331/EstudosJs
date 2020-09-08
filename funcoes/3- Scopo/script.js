let nome = "lucas";

//com let e const os escopos são diferentes

function nomeDev(){
    let nome = "lucaaaas";

    console.log(nome);

    return nome;

}

let dev = nomeDev();

console.log(dev);

