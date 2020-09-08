
// alguns dos parametros dessa function são opcionais, tratei isso atraves de um if
function soma(a,b){
    if(a == undefined || b == undefined){
        console.log("Essa funcao precisa de parametros man");
    } else{
        let resultado = a+b;
        console.log(resultado);
    }
}

soma(30,30);
