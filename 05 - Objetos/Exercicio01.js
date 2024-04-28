/*
1 - Crie uma classe para representar carros.
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Km rodado.
Crie um método que dado a quantidade de km e o preço do combustível nos dê o valor
gasto em reais para realizar este percurso.
*/

//Classe
class carro {
    constructor(marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    //Método
    calcularGasto(distanciaEmKm, precoCombustivel) {
        return distanciaEmKm * this.gastoMedioPorKm * precoCombustivel;
    }
}

//Instância
const uno = new carro('Fiat', 'Prata', 1 / 12);
const civicTypeR = new carro('Honda', 'Vermelho', 1 / 11);

//Saída
console.log(uno.calcularGasto(70, 5).toFixed(2));
console.log(civicTypeR.calcularGasto(70, 5).toFixed(2));

