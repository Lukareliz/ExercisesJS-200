function calcularIMC(peso, altura){
    let imc = peso / (altura ** 2);

    if(imc < 18.5){
        console.log('IMC: ' + Math.floor(imc) + ', Abaixo do peso.');
    }else if(imc >= 18.5 && imc < 25){
        console.log('IMC: ' + Math.floor(imc) + ', peso normal.');
    }else if(imc >= 25 && imc < 30){
        console.log('IMC: ' + Math.floor(imc) + ', sobre-peso.');
    }else{
        console.log('IMC: ' + Math.floor(imc) + ', obesidade.');
    }
}

calcularIMC(40, 1.67);
calcularIMC(70, 1.76);
calcularIMC(90, 1.80);
calcularIMC(130, 1.80);

//Neste exercicio eu utilizei a funcao math.floor() para imprimir somente os numeros inteiros do resultado do IMC.