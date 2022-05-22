function verificaPalindromo(palavra){
    if(!palavra) return "Palavra inexistente";

    return palavra.split("").reverse().join("") === palavra;

}

function verificaPalindromo2(string){
    if(!string) return "Palavra inexistente";

    for(let i = 0; i  < string.length / 2; i++){
        if(string[i] !== string[string.length - 1 - i]) {
            return false;
        }
    }
    return true;

}

//let frase = "";
//let frase = null;
//let frase ;
let frase = "aba";
//let frase = "gato";

console.log(verificaPalindromo2(frase));