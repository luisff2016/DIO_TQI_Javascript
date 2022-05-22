const alunos = [
    {
        nome: 'fernando',
        nota: 7.5,
        turma: '1A',
    },
    {
        nome: 'LUIS',
        nota: 8,
        turma: '1A',
    },
    {
        nome: 'jose',
        nota: 5,
        turma: '1A',
    },
];

function alunosAprovados(lista, media){
    let aprovados =[];

    for (let index = 0; index < lista.length; index++) {
        const{nota, nome} = lista[index];
        if(nota >= media){
            aprovados.push(nome);
        };
    }
    return aprovados;

}

console.log(alunosAprovados(alunos, 5));

/**
 *  for (let index = 0; index < lista.length; index++) {
        if(lista[index].nota >= media){
            aprovados.push(lista[index].nome);
        };
    }
 */