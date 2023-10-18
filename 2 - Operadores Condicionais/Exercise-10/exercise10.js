function calcularMedia(notaX, notaY){
    var media = (notaX + notaY) / 2;
    console.log("Média: " + media);


    if(media >= 7){
        console.log('Aluno aprovado!');
    }else{
        console.log('Aluno reprovado!');
    }
}

calcularMedia(10,8);