// Faça um programa que calcula e imprima o salário a ser tranferido para um funcionário
// Para realizar o calculo receba o valor bruto do salário e o adicional dos benefícios
// O salário a ser transferido é calculado da seguinte maneira:

// Valor bruto do salário - percentual de imposto mediante a faixa salarial + adicional dos benefícios
// Para calcular o percentual de imposto segue as aliquotas:
// De R$0.00 a R$ 1100.00 = 5.00%
// De R$1100.01 a R$ 2500.00 = 10.00%
// Maior que 2500.00 = 15.00%
// Exemplo:
// Entrada: 2000
// 250
// Saída: 2050.00

const { gets, print } = require('./funcoes-auxiliares-ex3');

var salarioBruto = gets();
var beneficios = gets();

function CalculoSalario(salario, beneficios) {
    if (salario <= 1100) {
        percentual = 5;
    } else if (salario >= 1100 && salario <= 2500) {
        percentual = 10;
    } else {
        percentual = 15
    }

    var Porcentagem = salario * (percentual / 100);

    return salario - Porcentagem + beneficios;
}

print(CalculoSalario(salarioBruto, beneficios));