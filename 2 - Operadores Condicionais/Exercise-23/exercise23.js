function verificarCor(cor) {
    if(cor === "vermelho") {
        console.log("Parar");
    } else if(cor === "amarelo") {
        console.log("atenção");
    } else if(cor === "verde"){
        console.log("Seguir");
    } else {
        console.log("cor incorreta");
    }
}

verificarCor("vermelho");
verificarCor("amarelo");
verificarCor("verde");
verificarCor("roxo");