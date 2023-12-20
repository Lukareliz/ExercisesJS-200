function verificarEstacao(mes){
    if(mes < 3 || mes == 12){
        console.log(`A estação do mês ${mes} é Verão.`);
    }else if(mes < 6){
        console.log(`A estação do mês ${mes} é Outono.`);
    }else if(mes < 9){
        console.log(`A estação do mês ${mes} é Inverno.`);
    }else{
        console.log(`A estação do mês ${mes} é Primavera.`);
    }
}

verificarEstacao(2);
verificarEstacao(5);
verificarEstacao(7);
verificarEstacao(11);