/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
// 1. Questo codice dovrebbe stampare i numeri da 0 a 4.
// 2. Sì, c'è un errore di sintassi. Il test condizionale nella dichiarazione del ciclo `for` è `i > 5`, che impedisce al ciclo di essere eseguito perché l'iterazione iniziale non soddisfa la condizione.
// 3. Sì, c'è un errore logico perché la condizione del ciclo impedisce al ciclo di eseguire iterazioni.
for (let i = 0; i < 5; i++) { // Correzione: cambio la condizione da i > 5 a i < 5
    console.log(i);
}


// ESERCIZIO 2
function addIfEven(num) {
    if (num % 2 = 0) {
        return num + 5;
    }
    return num;
}


// ESERCIZIO 3
function loopToFive() {
    for (let i = 0, i < 5, i++) {
        console.log(i);
    }
}


// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length - 1; i++;) {
        if (numbers % 2 = 0); {
            evenNumbers.push(i);
        }
        return evenNumbers;
    }
}
displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]