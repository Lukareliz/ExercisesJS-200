function verificarMedia(mediaFinal){
    if(mediaFinal >= 7){
        console.log(`Aprovado com nota ` + mediaFinal);
    }else if(mediaFinal >= 5 && mediaFinal <= 6.9){
        console.log(`Em recuperação com nota ` + mediaFinal);
    }else{
        console.log(`Reprovado com nota ` + mediaFinal);
    }
}

verificarMedia(8);
verificarMedia(6.5);
verificarMedia(3);