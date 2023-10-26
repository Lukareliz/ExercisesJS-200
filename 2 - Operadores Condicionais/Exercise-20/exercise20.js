function classificarNota(nota){
    if(nota >= 90){
        console.log(`A nota do aluno foi ${nota}, ele tirou A`);
    }else if(nota >= 80){
        console.log(`A nota do aluno foi ${nota}, ele tirou B`);
    }else if(nota >= 70){
        console.log(`A nota do aluno foi ${nota}, ele tirou C`);
    }else if(nota >= 60){
        console.log(`A nota do aluno foi ${nota}, ele tirou D`);
    }else{
        console.log(`A nota do aluno foi ${nota}, ele tirou F`);
    }
}

classificarNota(95);
classificarNota(89);
classificarNota(71);
classificarNota(68);
classificarNota(40);