function verificarIdade(idade){
    if(idade >= 18 && idade <= 70){
        console.log(idade + ' anos, voto obrigatório.');
    }else if((idade >= 16 && idade < 18) || idade > 70){
        console.log(idade + ' anos, voto facultativo.');
    }else{
        console.log(idade + ' anos, não pode votar');        
    }
};

verificarIdade(13); //não pode votar
verificarIdade(73); //facultativo
verificarIdade(30); //obrigatório
verificarIdade(17); //facultativo