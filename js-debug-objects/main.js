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


// ESERCIZIO 1 (suggerimento: ci sono 6 errori)
// 1. Questo codice definisce un array di oggetti auto e poi filtra questo array in tre sottoarray: uno contenente le auto a benzina, uno le auto a diesel e uno le auto con un tipo diverso da benzina o diesel. Infine, stampa questi sottoarray.
// 2. Sì, ci sono errori di sintassi e semantici.
// 3. Sì, ci sono errori logici.
const cars = [
    {
        manufacturer: 'Ford',
        model: 'Fiesta',
        type: 'diesel'
    },
    {
        manufacturer: 'Audi',
        model: 'A1',
        type: 'benzina'
    },
    {
        manufacturer: 'Volkswagen',
        model: 'Golf',
        type: 'Benzina'
    },
    {
        manufacturer: 'Fiat',
        model: 'Panda',
        type: 'metano'
    },
    {
        manufacturer: 'Fiat',
        model: 'Multipla',
        type: 'GPL'
    },
    {
        manufacturer: 'Tesla',
        model: 'Model 3',
        type: 'elettrico'
    },
    {
        manufacturer: 'Volkswagen',
        model: 'Polo',
        type: 'benzina'
    },
    {
        manufacturer: 'Ford',
        model: 'Kuga',
        type: 'Diesel'
    },
    {
        manufacturer: 'Seat',
        model: 'Ibiza',
        type: 'metano'
    },
    // Correzione: Aggiunto una virgola dopo l'oggetto Seat
    {
        manufacturer: 'Audi',
        model: 'R8',
        type: 'Benzina'
    },
];

// Correzione: Cambiato "=>" in "===" nella funzione di filtro
const gasolineCars = cars.filter((auto) => auto.type === 'benzina');

// Correzione: Aggiunto un return nella funzione di filtro
const dieselCars = cars.filter((auto) => {
    return auto.type === 'diesel';
});

// Correzione: Corretto l'operatore logico nella funzione di filtro
const otherCars = cars.filter((auto) => {
    return auto.type !== 'benzina' && auto.type !== 'diesel';
});

console.log('Auto a benzina');
console.log('*******************************');
console.log(gasolineCars);

console.log('Auto a diesel');
console.log('*******************************');
console.log(dieselCars);

console.log('Tutte le altre auto');
console.log('*******************************');
console.log(otherCars);