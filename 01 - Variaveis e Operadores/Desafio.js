/* Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
1 - Preço do combustível;
2 - Gasto médio de combustível do carro por KM;
3 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem. */

// Variaveis

const PrecoGas = 5.79;
const KmPorLitro = 10;
const DistanciaKM = 500;

const litrosCons = DistanciaKM / KmPorLitro;
const valorGasto = litrosCons * PrecoGas;

console.log(valorGasto.toFixed(2));