function calcularMaior(numX, numY, numZ){
    if(numX > numY && numX > numZ){
        console.log('O número (X) ' + numX + ' é maior que ' + numY + ' e ' + numZ);
    }else if(numY > numX && numY > numZ){
        console.log('O número (Y) ' + numY + ' é maior que ' + numX + ' e ' + numZ);
    }else if(numZ > numX && numZ > numY){
        console.log('O número (Z) ' + numZ + ' é maior que ' + numX + ' e ' + numY);
    }else{
        console.log('Os números tem o mesmo valor.')
    }
}

calcularMaior(1, 2, 3);
calcularMaior(1, 3, 2);
calcularMaior(3, 2, 1);
calcularMaior(1, 1, 1);