/* Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
1 - Preço do Etanol;
2 - Preço da gasolina;
3 - O tipo de combustivel que esta no seu carro
5 - Gasto médio de combustível do carro por KM;
6 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem. */

// Desafio

const PrecoGasolina = 5.79;
const PrecoEtanol = 4.50;
const TipoCombustivel = "gasolina";
const KmPorLitro = 10;
const DistanciaKM = 500;

let precoCombustivel = 0;

if (TipoCombustivel === "etanol") {
    precoCombustivel = PrecoEtanol;
}
else if (TipoCombustivel === "gasolina") {
    precoCombustivel = PrecoGasolina;
}
else {
    console.log("Tipo de combustível inválido.");
}

const litrosCons = DistanciaKM / KmPorLitro;
const valorGasto = litrosCons * precoCombustivel;

console.log('O valor gasto para realizar a viagem é de R$' + valorGasto.toFixed(2));