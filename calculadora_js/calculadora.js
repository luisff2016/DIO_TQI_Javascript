function calculadora() {

    const operacao = Number(prompt("Escolha uma operacao:\n 1 - Soma (+)\n 2 - Subtracao (-)\n 3 - Multiplicacao (*)\n 4 - Divisão (/)\n 5 - Divisão inteira (%)\n 6 - Potenciação (**)"));

    if (!(operacao > 0 && operacao < 7)) {
        alert('Digite uma opção valida!')
        calculadora();
    } else {
        let n1 = Number(prompt(`Inserir o primeiro valor:`));
        let n2 = Number(prompt(`Inserir o segundo valor:`));
        let resultado;

        if (!n1 || !n2) {
            alert('Parametros invalidos')
            calculadora();
        } else {
            function soma() {
                resultado = n1 + n2;
                alert(`${n1} + ${n2} = ${resultado}`)
                console.log(n1 + '+' + n2 + '=' + resultado);
                novaOperacao();
            }

            function subtracao() {
                resultado = n1 - n2;
                alert(`${n1} - ${n2} = ${resultado}`)
                novaOperacao();
            }

            function multiplicacao() {
                resultado = n1 * n2;
                alert(`${n1} * ${n2} = ${resultado}`)
                novaOperacao();
            }

            function divisao() {
                resultado = n1 / n2;
                alert(`${n1} / ${n2} = ${resultado}`)
                novaOperacao();
            }

            function divisaoint() {
                resultado = n1 % n2;
                alert(`O resto da divisao entre ${n1} e ${n2} é igual a ${resultado}`)
                novaOperacao();
            }

            function potenciacao() {
                resultado = n1 ** n2;
                alert(`${n1} elevado a ${n2}ª é igual a ${resultado}`)
                novaOperacao();
            }

            function novaOperacao() {
                let opcao = prompt('Deseja fazer outra operação?\n 1 - SIM\n 2 - NAO');
                if (opcao == 1) {
                    calculadora();
                } else if (opcao == 2) {
                    alert('Ate mais!')
                    return
                } else {
                    alert('Digite uma opção valida!')
                    novaOperacao();
                }
            }


            switch (operacao) {
                case 1:
                    soma();
                    break;
                case 2:
                    subtracao();
                    break;
                case 3:
                    multiplicacao();
                    break;
                case 4:
                    divisao();
                    break;
                case 5:
                    divisaoint();
                    break;
                case 6:
                    potenciacao();
                    break;
            }
        }
    }
}

calculadora();


/**
 *  if (operacao == 1 ) { soma(); }
else if (operacao == 2 ) { subtracao(); }
else if (operacao == 3 ) { multiplicacao(); }
else if (operacao == 4 ) { divisao(); }
else if (operacao == 5 ) { divisaoint(); }
else if (operacao == 6 ) { potenciacao(); }
*/
