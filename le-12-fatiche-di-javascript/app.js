// ------------------------------------------------------------
// 1. Gestisce l'evento di pressione del tasto "Invio" (Enter) nell'elemento di input.
// 2. Non ci sono errori di sintassi evidenti nel codice.
// 3. Ci sono alcuni errori logici nel calcolo dell'elemento più frequente e del numero di volte che appare.
// ------------------------------------------------------------
const input = document.querySelector('input');
const array = [];

input.addEventListener('keypress', function(event) {

    if (event.code != 'Enter') return; // Controllo se il tasto premuto è "Enter"
    if (input.value == '')     return; // Controllo se l'input è vuoto

    array.push(input.value); // Aggiungo il valore dell'input all'array

    const li = document.createElement('li');
    li.classList.add('list-group-item');
    li.innerText = input.value;
    document.querySelector('ul').append(li);

    let counter = 0;
    let max     = 1;
    let item    = array[0];
    const elems = [];

    for (let i = 0; i < array.length; i++) {
        let val = array[i];

        if (!elems[val]) {
            elems[val] = 1;
        } else {
            elems[val]++;
        }

        for (let j = i; j < array.length; j++) {
            if (array[i] == array[j]) {
                counter++;
                if (max < counter) {
                    max  = counter;
                    item = array[i];
                }
            }
        }
        counter = 0;
    }

    const alert = document.getElementsByClassName('alert')[0];

    alert.classList.remove('d-none'); // Rimuovo la classe 'd-none' per visualizzare l'elemento di avviso
    alert.classList.add('d-flex');   // Aggiungo la classe 'd-flex' per visualizzare l'elemento di avviso

    alert.querySelector('span:first-child').innerText = item; // Imposto il testo del primo span con l'elemento più frequente
    alert.querySelector('span:last-child').innerText = max;  // Imposto il testo del secondo span con il numero di occorrenze

    console.log(`${item} trovato ${max} volte`); // Stampo il risultato nella console
});
