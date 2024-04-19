const num = 0;
const numeroDivisivelPor5 = (num % 5) === 0;

if (num === 0) {
    console.log('O número é inválido');
}
else if (numeroDivisivelPor5) {
    console.log('Sim');
} 
else {
    console.log('Não');
}

