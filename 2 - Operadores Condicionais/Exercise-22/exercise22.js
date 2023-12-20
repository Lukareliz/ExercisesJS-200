function mostrarDias(mes) {
    switch (mes) {
        case (2):
            console.log(`O mês ${mes} tem 28 ou 29 dias.`)
            break
        case (3):
        case (4):
        case (6):
        case (9):
        case (11):
            console.log(`O mês ${mes} tem 30 dias.`)
            break

        default: console.log(`O mês ${mes} tem 31 dias.`);
    }
}

mostrarDias(1);
mostrarDias(2);
mostrarDias(3);
mostrarDias(4);
mostrarDias(5);
mostrarDias(6);
mostrarDias(7);
mostrarDias(8);
mostrarDias(9);
mostrarDias(10);
mostrarDias(11);
mostrarDias(12);