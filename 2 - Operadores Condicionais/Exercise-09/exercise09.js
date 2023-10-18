function verificarNumero(num){
    if(num == 0){
        console.log('O número '+ num + ' é igual a 0');
    }else if(num < 0){
        console.log('O número '+ num + ' é negativo');
    }else{
        console.log('O número '+ num + ' é positivo');
    }
}

verificarNumero(-1);
verificarNumero(0);
verificarNumero(1);