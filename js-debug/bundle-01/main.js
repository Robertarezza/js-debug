/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1 era impostato con i magg di 5 ma i parte da 0 quindi per far funzionare il ciclo deve essere inpostato su minore
for (let i = 0; i < 5; i++) {
    console.log(i);//cosi in consol ci saranno tittu i num minori di 5
}


// ESERCIZIO 2 mancavano altri due  == perche con un solo = è un operatore di assegnazione, quindi assegniamo un valore, mentre === è un operatore di confronto o uguaglianza, in qst caso stiamo chiedendo se il num(valore che inseriamo) è divisibile per 2 qnd resto 0 allora restutisce il num dichiarato +5 altrimenti restirutuirà solo il num dichiarato
function addIfEven(num) {
    if (num % 2 === 0) {
        return num + 5;
    }
    return num;
}
// console.log(addIfEven(2));//se inserisco 2 mi restituisce 7 se inserisco 5 mi restituisce 5 perchè 5 non è div per 2

// ESERCIZIO 3 // mancavano i ; dopo lo 0 e il 5 nel ciclo for
function loopToFive() {

    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
}
//  loopToFive();//al richiamo la funzione stampa in console i num da 0 a 4 come richiesto

// // ESERCIZIO 4 (suggerimento: ci sono 7 errori)
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];

    for (let i = 0; i < numbers.length; i++) { //1 non va il ; dopo i++ // 4 non va -1 se no non prenderà in considerazione l'ultimo indice

        if (numbers[i] % 2 === 0) { //2 mancano altri due ==, 3 non va ; dopo la par tonda della condizione,//5 visto che non abbiamo dichiarato l'elemento corrente quin va number[i]
            evenNumbers.push(numbers[i]);//6 anche qui va push(numbers[i])

        }

    }
    return evenNumbers;// 7 il return va fuori dal ciclo for
}
// dovrebbe restituire [2,4,6,8]
const aEvenNumbers = displayEvenNumbers();
console.log(aEvenNumbers); 