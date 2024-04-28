/*
2 - Crie uma classe para representar pessoas.
Para casa pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do sei IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1.75 de altura e peça ao José para
dizer o valor do seu IMC;
*/

//Classe
class pessoa {
    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    //Métodos
    calcularIMC() {
        return this.peso / (this.altura * this.altura).toFixed(2);
    }
    classificarIMC() {
        const imc = this.calcularIMC();

        if (imc < 18.5) {
            return ('Abaixo do peso.');
        }
        else if (imc >= 18.5 && imc <= 25) {
            return ('Peso normal.');
        }
        else if (imc >= 25 && imc <= 30) {
            return ('Acima do peso.');
        }
        else if (imc >= 30 && media <= 40) {
            return ('Obeso.');
        }
        else {
            return ('Obesidade grave.');
        }
    }
}

//Instância
const jose = new pessoa('José', 70, 1.75);
console.log(jose.classificarIMC());

const jackson = new pessoa('Jackson', 100, 1.82);
console.log(jose.classificarIMC());

