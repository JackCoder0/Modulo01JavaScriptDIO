let pessoa = {
    nome: 'Jackson',
    'nome completo': 'Jackson Antonio Silva',
    idade: 19,
    email: 'jacksonxcontato13@gmail.com',
    saudacao: function () {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos de idade.`)
    }
};

let propriedade = 'nome completo';

console.log(pessoa['nome']);
console.log(pessoa[propriedade]);
console.log(pessoa['idade']);
console.log(pessoa['email']);

pessoa.saudacao()

//Deletando informação
delete pessoa.email

console.log(pessoa);