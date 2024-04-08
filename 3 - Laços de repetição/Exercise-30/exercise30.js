for(i = 2; i <= 100; i++){
    let primeNum = true;

    for(division = 2; division < i; division++){
        if(i % division == 0){
            primeNum = false;
            break;
        }
    }

    if(primeNum){
        console.log(i)
    }
}