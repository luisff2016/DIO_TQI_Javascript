function validarArray(arr, num) {
    try {
        if (!arr && !num) throw new ReferenceError('Envie os parametros validos');

        if (typeof arr !== 'object') throw new TypeError('Array precisa ser do tipo object');

        if (typeof num !== 'number')
            throw new TypeError('Num precisa ser do tipo number');

        if (arr.length !== num) throw new RangeError('Tamanho invalido');

        return arr;

    } catch (error) {
        if (error instanceof ReferenceError) {
            console.log('Este erro é um ReferenceError!')
            console.log(error.message)
        } else if (error instanceof TypeError) {
            console.log('Este erro é um TypeError!')
            console.log(error.message)
        } else if
            (error instanceof RangeError) {
            console.log('Este erro é um RangeError!')
            console.log(error.message)
        } else {
            console.log('Tipo de erro não esperado:' + error)
        }

    }
}

console.log(validarArray([],0));
console.log(validarArray('teste',5));
console.log(validarArray([1,2,3],3));
console.log(validarArray([1,5,7,9,2,4,6,8],10));
console.log(validarArray([1],'a'));