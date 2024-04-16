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
// 1. Questa funzione dovrebbe restituire `num + 5` se `num` è pari, altrimenti restituirà `num` stesso.
// 2. Sì, c'è un errore di sintassi. Nella condizione `if`, `=` è un operatore di assegnazione, ma dovrebbe essere usato `==` o `===` per confrontare.
// 3. No, non ci sono errori logici.
function addIfEven(num) {
    if (num % 2 === 0) { // Correzione: cambio `=` a `===` per confrontare invece di assegnare
        return num + 5;
    }
    return num;
}


// ESERCIZIO 3
// 1. Questa funzione dovrebbe stampare i numeri da 0 a 4.
// 2. Sì, ci sono errori di sintassi. La dichiarazione del ciclo `for` ha una virgola invece di un punto e virgola tra le espressioni.
// 3. Sì, la virgola usata invece del punto e virgola potrebbe causare un comportamento imprevisto, ma non ci sono errori logici concettuali.
function loopToFive() {
    for (let i = 0; i < 5; i++) { // Correzione: sostituisco la virgola con il punto e virgola
        console.log(i);
    }
}


// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
// 1. Questa funzione dovrebbe restituire una lista di numeri pari dall'array `numbers`.
// 2. Sì, ci sono diversi errori di sintassi:
//    - Nella condizione del ciclo `for`, c'è un punto e virgola in eccesso dopo l'ultima espressione.
//    - Nell'istruzione `if`, `=` è usato al posto di `===` o `==` per confrontare.
//    - Dopo l'istruzione `if`, c'è un punto e virgola in eccesso.
// 3. Sì, c'è un errore logico perché la condizione nell'istruzione `if` è sbagliata e `numbers` non viene usato correttamente per controllare la parità dei numeri. Inoltre, l'array `evenNumbers` non viene popolato correttamente e la dichiarazione `return evenNumbers` è posizionata in modo tale da restituire l'array dopo la prima iterazione del ciclo. 
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length; i++) { // Correzione: rimuovo il punto e virgola in eccesso dopo i
        if (numbers[i] % 2 === 0) { // Correzione: cambio `=` a `===` per confrontare invece di assegnare
            evenNumbers.push(numbers[i]);
        }
    } // Correzione: sposto la dichiarazione del return all'esterno del ciclo
    return evenNumbers;
}
displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]