/*
2 - O IMC - Indice de Massa Corporal é um critério
da Organização Mundial de Saúde para dar uma
indicação sobre a condição de peso de uma pessoa adulta.

Formula do IMC :
IMC = peso / (altura * altura)

Elabore um algoritimo que dado o peso e a altura de um
adulto moste sua condição de acordo com a tabela abaixo.

IMC em aldutos:
- Abaixo de 18.5, Abaxio do peso;
- Entre 18.5 e 25, Peso normal;
- Entre 25 e 30, Acima do peso;
- Entre 30 e 40, Obeso;
- Acima de 40, Obesidade Grave;
*/

// Variaveis

let peso = 95;
let altura = 1.85;
const imc = (peso / (altura * altura)).toFixed(2);

// Processo e Saída

if (imc < 18.5) {
    console.log('Você está Abaixo do Peso! Seu IMC é ' + imc);
}
else if (imc >= 18.5 && imc <= 25) {
    console.log('Você está no Peso Normal! Seu IMC é ' + imc);
}
else if (imc >= 25 && imc <= 30) {
    console.log('Você está Acima do Peso! Seu IMC é ' + imc);
}
else if (imc >= 30 && media <= 40) {
    console.log('Você está Obeso! Seu IMC é ' + imc);
}
else {
    console.log('Você está em Obesidade Grave! Seu IMC é ' + imc);
}