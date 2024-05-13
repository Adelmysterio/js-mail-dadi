/* Gioco dei Dadi */

const numeroUtente = Math.floor(Math.random() * 6) + 1;
const numeroComputer = Math.floor(Math.random() * 6) + 1;

if (numeroUtente === numeroComputer) {
    console.log (numeroUtente, numeroComputer, "Pareggio")
}

else if (numeroUtente > numeroComputer) {
console.log (numeroUtente, numeroComputer, "Hai Vinto")
}

else {
    console.log (numeroUtente, numeroComputer, "Hai Perso")
}