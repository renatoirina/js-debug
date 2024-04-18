/*******************************************************************************
​
    Per questo esercizio, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?
​
    Inserisci i tuoi commenti con le risposte alla fine dell'esercizio
​
*******************************************************************************/


// ESERCIZIO 1
// 1. Questo codice definisce una funzione `checkAge` che determina se l'età dell'utente è inferiore a 18 e stampa un messaggio di conseguenza.
// 2. No, non ci sono errori di sintassi.
// 3. No, non ci sono errori logici.
function checkAge() {
    const myAge = 32;
    let message = ''; // Correzione: cambiato da const a let per consentire la modifica
​
    if (myAge < 18) {
        message = `Sei troppo giovane! Hai ${myAge} anni!`;
    } else {
        message = 'Hai più di 18 anni!';
    }
}
checkAge();

// ESERCIZIO 2
// 1. Questo codice definisce una funzione `printColorsNumber` che stampa il numero di colori presenti nell'array `colors`.
// 2. Sì, c'è un errore di sintassi. Si scrive "lenght" invece di "length" per ottenere la lunghezza dell'array `colors`.
// 3. No, non ci sono errori logici.
function printColorsNumber() {
    const colors = ['blue', 'red', 'yellow', 'green', 'black'];
    console.log(`Nella mia palette ci sono ${colors.length} colori!`); // Correzione: corretto "lenght" in "length"
}
printColorsNumber();


// ESERCIZIO 3
// 1. Questo codice definisce una funzione `addNumbers` che chiede all'utente di inserire un numero, lo converte in un numero intero e aggiunge 12, quindi stampa il risultato.
// 2. No, non ci sono errori di sintassi.
// 3. Sì, c'è un errore logico perché `userNumber` è trattato come stringa e non viene convertito in un numero prima di essere usato in operazioni matematiche.
function addNumbers() {
    const userNumber = parseInt(prompt('Inserisci un numero')); // Correzione: converto la stringa in un numero
    const total = userNumber + 12;

    console.log(`Il risultato finale è ${total}`);
}
addNumbers();


// ESERCIZIO 4
function checkAccess() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];
    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = 'false';

    if (addresses.includes(userEmail)) {
        grantAccess = 'true';
    }

    if (grantAccess === true) {
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
}
checkAccess();


// ESERCIZIO 5 (suggerimento: c'è un solo errore)
function checkAccessImproved() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];

    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = 'false';

    for (let i = 0; i < addresses.length; i++) {
        const email = addresses[i];

        if (userEmail.length > 5) {

            if (email === userEmail) {
                grantAccess = 'true';

            }

        }

        if (grantAccess) {
            console.log('Accesso consentito!');
        } else {
            console.log('Accesso negato!');
        }
    }
    checkAccessImproved();
