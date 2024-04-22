function CalcularIMC(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classficarIMC(imc) {
    if (imc < 18.5) {
        return ('Você está Abaixo do Peso! Seu IMC é ' + imc);
    }
    else if (imc >= 18.5 && imc <= 25) {
        return ('Você está no Peso Normal! Seu IMC é ' + imc);
    }
    else if (imc >= 25 && imc <= 30) {
        return ('Você está Acima do Peso! Seu IMC é ' + imc);
    }
    else if (imc >= 30 && media <= 40) {
        return ('Você está Obeso! Seu IMC é ' + imc);
    }
    else {
        return ('Você está em Obesidade Grave! Seu IMC é ' + imc);
    }
}

function main() {
    let peso = 95;
    let altura = 1.85;

    const imc = CalcularIMC(peso, altura);
    console.log(classficarIMC(imc));
}

main();