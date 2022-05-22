function comparaNumeros(num1, num2) {
    const primeiraFrase = criaPrimeiraFrase(num1, num2);
    const segundaFrase = criaSegundaFrase(num1, num2);


    return primeiraFrase + segundaFrase;

}

function criaPrimeiraFrase(num1, num2) {
    let saoIguais;
    saoIguais = num1 === num2 ? '' : 'não';
    return `Os numeros ${num1} e ${num2} ${saoIguais} são iguais. `
}

function criaSegundaFrase(num1, num2) {
    const soma = num1 + num2;
    let compara10 = soma < 10 ? ' menor que dez': (soma === 10 ? ' igual a dez': ' maior que dez') ;
    let compara20 = soma < 20 ? ' menor que vinte': soma === 20 ? ' igual a vinte': ' maior que vinte' ;
    return `A soma de ${num1} e ${num2} é ${soma}, que é ${compara10} e ${compara20}.`
}

console.log(comparaNumeros(10,11));