function podeDirigir(idade){
    if(idade >= 18){
        console.log('Idade: ' + idade + ', pode dirigir.');
    }else{
        console.log('Idade: ' + idade + ', não pode dirigir.');
    }
}

podeDirigir(21);
podeDirigir(15);