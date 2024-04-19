/*
1 - Faça um algoritimo que dado as 3 notas tiradas por um aluno
em semestre da faculdade, calcule e imprima a sua média e sua
classificação conforme a tabela abaixo.

Média = (nota1 + nota2 + nota3) / 3

Classificação:
- Média menor que 5, reprovação.
- Média entre 5 e 7, recuperação.
- Média acima de 7, passou de semestre.
*/

// Variaveis
let nota1 = 10;
let nota2 = 8;
let nota3 = 5;
const media = ((nota1 + nota2 + nota3) / 3).toFixed(2);

// Processo e Saída
if (media < 5) {
    console.log('Reprovado! Sua nota é ' + media);
}
else if (media >= 5 && media <= 7 ) {
    console.log('Recuperação! Sua nota é ' + media);
}
else {
    console.log('Passou de Semestre! Sua nota é ' + media);
}