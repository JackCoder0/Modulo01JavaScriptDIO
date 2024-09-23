// Faça um programa que receba N (quantidade de números) e seys respectivos valores
// Imprima o maior número par e o menor número impar.

const { gets, print } = require("./funcoes-auxiliares-ex2");

const n = gets();
let maiorPar = 0;
let menorImpar = 0;

for (let i = 0; i < n; i++) {
  const numero = gets();
  if (numero % 2 == 0) {
    if (numero > maiorPar) {
      maiorPar = numero;
    }
  } else {
    if (menorImpar == 0) {
      menorImpar = numero;
    } else if (numero < menorImpar) {
      menorImpar = numero;
    }
  }
}
console.log("Maior número par:", maiorPar);
console.log("Menor número ímpar:", menorImpar);
