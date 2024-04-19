/*
3 - Elabore um algoritmo que calcule o que deve ser pago por um produto,
considerando o preço normal de etiqueta e a escolha de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição
de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
1 - À vista Débito, recebe 10% de desconto;
2 - À vista no Dinheiro ou PIX, recebe 15% de desconto;
3 - Em duas vezes, preço normal de etiqueta sem juros;
4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%
*/

// Variaveis
const PrecoNormal = 100;
const EscolhaPagamento = 4;

// Processo e Saída

if (EscolhaPagamento === 1) {
    console.log(PrecoNormal - (PrecoNormal * 0.1));
}
else if (EscolhaPagamento === 2) {
    console.log(PrecoNormal - (PrecoNormal * 0.15));
}
else if (EscolhaPagamento === 3) {
    console.log(PrecoNormal);
}
else {
    console.log(PrecoNormal + (PrecoNormal * 0.1));
}