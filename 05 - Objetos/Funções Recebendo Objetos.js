class pessoa {
    constructor(nome, idade, anoDeNascimento) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2024 - idade;
    }

    saudacao() {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos de idade.`)
    }
}

function compararPessoas(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`)
    }
    else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`)
    }
    else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`)
    }
}

const jackson = new pessoa('Jackson', 20);
const fulano = new pessoa('Fulano', 28);

compararPessoas(jackson, fulano);