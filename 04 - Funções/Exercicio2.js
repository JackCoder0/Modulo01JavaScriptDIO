function calcularPrecoFinal(PrecoNormal, EscolhaPagamento) {
    if (EscolhaPagamento === 1) {
        return (PrecoNormal - (PrecoNormal * 0.1));
    }
    else if (EscolhaPagamento === 2) {
        return (PrecoNormal - (PrecoNormal * 0.15));
    }
    else if (EscolhaPagamento === 3) {
        return (PrecoNormal);
    }
    else {
        return (PrecoNormal + (PrecoNormal * 0.1));
    }
}

function main() {
    let PrecoNormal = 100;
    let EscolhaPagamento = 4;

    const PrecoFinal = calcularPrecoFinal(PrecoNormal, EscolhaPagamento);
    console.log("Preço Final:", PrecoFinal)
}

main();