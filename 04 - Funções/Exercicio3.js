function calcularSituacaoAluno(nota1, nota2, nota3) {
    const media = ((nota1 + nota2 + nota3) / 3).toFixed(2);

    if (media < 5) {
        return ('Reprovado! Sua nota é ' + media);
    }
    else if (media >= 5 && media <= 7) {
        return ('Recuperação! Sua nota é ' + media);
    }
    else {
        return ('Passou de Semestre! Sua nota é ' + media);
    }
}

function main() {
    const nota1 = 10;
    const nota2 = 8;
    const nota3 = 5;

    const situacao = calcularSituacaoAluno(nota1, nota2, nota3);
    console.log(situacao);
}

main();