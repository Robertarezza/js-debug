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
        type: 'benzina'     // 2 in alcuni usano le maiuscolo in altre le minuscole
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
        type: 'diesel'          // 2 in alcuni usano le maiuscolo in altre le minuscole
    },
    {
        manufacturer: 'Seat',
        model: 'Ibiza',
        type: 'metano'
    },                          //1 mancava una virgola
    {
        manufacturer: 'Audi',
        model: 'R8',
        type: 'benzina'         // 2 in alcuni usano le maiuscolo in altre le minuscole
    },
];

//3 non abbiamo dichiarato le variabili dove salvare i 3 filtri
let gasolineCars = [];
let dieselCars = [];
let otherCars = [];


 gasolineCars = cars.filter( (auto) => auto.type === 'benzina'); //4  l'arrow fuction non era stata scritta correttamente

 dieselCars = cars.filter( (auto) => {
    return auto.type === 'diesel';                 //5 qui manca il return
});

 otherCars = cars.filter( (auto) => {
    return auto.type !== 'benzina' && auto.type !== 'diesel'; //6 qui non dobbiamo usare || ma &&
});

console.log('Auto a benzina');
console.log('*******************************');
console.log(gasolineCars);

console.log('Auto a diesel');
console.log('*******************************');
console.log(dieselCars);

console.log('Tutte le altre auto');
console.log(otherCars);