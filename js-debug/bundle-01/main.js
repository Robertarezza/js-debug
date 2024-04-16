/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// // ESERCIZIO 1 era impostato con i magg di 5 ma i parte da 0 quindi per far funzionare il ciclo deve essere inpostato su minore
// for (let i = 0; i < 5; i++) {
//     console.log(i);//cosi in consol ci saranno tittu i num minori di 5
// }


// ESERCIZIO 2 mancavano altri due  == perche con un solo = è un operatore di assegnazione, quindi assegniamo un valore, mentre === è un operatore di confronto o uguaglianza, in qst caso stiamo chiedendo se il num(valore che inseriamo) è divisibile per 2 qnd resto 0 allora restutisce il num dichiarato +5 altrimenti restirutuirà solo il num dichiarato
function addIfEven(num) {
    if (num % 2 === 0) {
        return num + 5;
    }
    return num;
}

console.log(addIfEven(2));//se inserisco 2 mi restituisce 7 se inserisco 5 mi restituisce 5 perchè 5 non è div per 2

// // ESERCIZIO 3
// function loopToFive() {
//     for (let i = 0, i < 5, i++) {
//         console.log(i);
//     }
// }


// // ESERCIZIO 4 (suggerimento: ci sono 7 errori)
// function displayEvenNumbers() {
//     let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
//     let evenNumbers = [];
//     for (let i = 0; i < numbers.length - 1; i++;) {
//         if (numbers % 2 = 0); {
//             evenNumbers.push(i);
//         }
//         return evenNumbers;
//     }
// }
// displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]