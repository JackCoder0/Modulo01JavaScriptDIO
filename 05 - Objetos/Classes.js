class pessoa {
    nome;
    idade;

    saudacao() {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos de idade.`)
    }
}

const jackson = new pessoa();
jackson.nome = 'Jackson';
jackson.idade = 19;

console.log(jackson);
jackson.saudacao();