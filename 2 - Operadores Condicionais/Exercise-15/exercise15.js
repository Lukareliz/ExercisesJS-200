function verificarPalindromo(palavra){
    palavra = palavra.toLowerCase();
    var reverse = palavra.split('').reverse().join('');

    if(palavra == reverse){
        console.log(`A palavra "${palavra}" é um palindromo.`); //Neste exercício ao invés de usar a concatenação (+), eu utilizei uma sintaxe chamada Template Literals.
    }else{
        console.log(`A palavra "${palavra}" não é um palindromo.`);
    }
}

verificarPalindromo("Gostar");
verificarPalindromo("Salas");
