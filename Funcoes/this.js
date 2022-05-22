// atividade this
const pessoa = {
    nome: 'Fernando',
    idade: 48
}

const pessoa2 = {
    nome: 'Gabriel',
    idade: 18
}

function calculaIdade(anos){
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;

}

console.log(calculaIdade.call(pessoa, 2)); // colchetes é opcional

console.log(calculaIdade.call(pessoa, (2)));

console.log(calculaIdade.call(pessoa, [2])); // colchetes provoca erro

console.log(calculaIdade.apply(pessoa2, [20])); // this aplicado ao primeiro argumento, depois um array

//console.log(calculaIdade.apply(pessoa2, 20)); // colchetes é obrigatorio, sua falta nao deixa compilar

//console.log(calculaIdade.apply(pessoa2, (20))); // se usar o parentese no lugar dos colchetes, da erro