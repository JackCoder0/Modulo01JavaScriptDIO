// Faça um programa que receba a média de um aluno
// Média seja < 5 "Reprovado"
// Média >= 5 e <7 "Recuperação"
// Média >= 7 "Aprovado"
// Exemplo:
//   Entrada: 5.5
//   Saída: Recuperação

const media = -1;

if (media >= 0 && media < 5) {
  console.log("Reprovado:", media);
} else if (media >= 5 && media < 7) {
  console.log("Recuperação:", media);
} else if (media >= 7) {
  console.log("Aprovado:", media);
} else {
  console.log("Média inválida");
}
