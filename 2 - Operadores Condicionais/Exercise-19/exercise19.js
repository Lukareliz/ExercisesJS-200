function verificarNumeroIntervalo(num, limiteInferior, limiteSuperior){
    if(num >= limiteInferior && num <= limiteSuperior){
        console.log(`O número ${num} esta entre o intervalo de ${limiteInferior} a ${limiteSuperior}`);
    }else{
        console.log(`O número ${num} não esta entre o intervalo de ${limiteInferior} a ${limiteSuperior}`);
    }
}

verificarNumeroIntervalo(15, 1, 20);
verificarNumeroIntervalo(15, 1, 10);