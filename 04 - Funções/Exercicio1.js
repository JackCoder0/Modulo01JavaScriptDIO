function EscrevaMeuNome(nome) {
    return ('Meu nome é ' + nome);
}

EscrevaMeuNome('Jackson');

function verificarIdade(idade) {
    if (idade >= 18) {
        console.log(EscrevaMeuNome('Jackson') + ", Você é Maior");
    }
    else {
        console.log("Você é Menor");
    }
}

verificarIdade(19);