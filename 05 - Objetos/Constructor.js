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

const jackson = new pessoa('Jackson', 20);

console.log(jackson);
jackson.saudacao();