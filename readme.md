<!--! Gioco dei dadi
Il giocatore gioca contro il computer.
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto. -->

Creo una const per il numero utente compreso da 1 a 6 usando math random

Creo una const per il numero del computer compreso da 1 a 6 usando math random

Pongo le condizioni:

      Se numero utente = numero del computer stampa "pareggio"
      Se numero utente > di numero del computer stampa "utente ha vinto"
      Se numero del computer > di numero utente stampa "computer ha vinto"

<!-- !Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo. -->

Creo una lista di email con un array

Creo un prompt dove chiedo la mail all' utente

pongo la condizione in cui se la mail utente e' inclusa negli elementi del array stampo "utente registrato" altrimenti stampo "utente non registrato"

<!-- !Saltare a piè dispari [Bonus]
Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è pari inseriscilo nell’array -->

Assegno una costante all array vuoto

Creo un ciclo for fino a 6 

     Chiedo all utente di scrivere un numero usando prompt

     Pongo la condizione in cui se il numero e' divisibile per 2 allora inseriscilo nel array
Controllo che siano effettivamente all'interno del array