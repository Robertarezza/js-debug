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


// ESERCIZIO 1 , Le variabili sono state dichiarate con const, ma vanno dichiarate con let se non possiamo riutilizzarle, in più my Age è impostata su 32 quindi non ha molto senso  potemmo renderla più generica eliminando la variabile myAge aggiungendo il parametro age e dargli il return del message, cosi è generica ha senso e può essere riutilizzata
function checkAge(age) {

    let message = '';

    if (age < 18) {
        message = `Sei troppo giovane! Hai ${age} anni!`;
        
    } else {
        message = "Hai più di 18 anni!";
       
    }
    return message
}
console.log(checkAge(17)); ; //Quando chiamiamo checkAge(), prima usciva undefined poichè eseguirà solo else perchè myAge è impostato su 32 anni, in più  non staiamo facendo nulla con quel messaggio se non memorizzandolo nel messaggio variabile.
//ora invece qualsiasi parametro "eta" gli passi a checkAge(), ti dirà se hai più o meno di 18 anni



// // ESERCIZIO 2
// function printColorsNumber() {
//     const colors = ['blue', 'red', 'yellow', 'green', 'black'];
//     console.log(`Nella mia palette ci sono ${colors.lenght} colori!`);
// }
// printColorsNumber();


// // ESERCIZIO 3
// function addNumbers() {
//     const userNumber = prompt('Inserisci un numero');
//     const total = userNumber + 12;

//     console.log(`Il risultato finale è ${total}`);
// }
// addNumbers();


// // ESERCIZIO 4
// function checkAccess() {
//     const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];
//     const userEmail = prompt('Inserisci il tuo indirizzo email');

//     let grantAccess = 'false';

//     if (addresses.includes(userEmail)) {
//         grantAccess = 'true';
//     }

//     if (grantAccess === true) {
//         console.log('Accesso consentito!');
//     } else {
//         console.log('Accesso negato!');
//     }
// }
// checkAccess();


// // ESERCIZIO 5 (suggerimento: c'è un solo errore)
// function checkAccessImproved() {
//     const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];

//     const userEmail = prompt('Inserisci il tuo indirizzo email');

//     let grantAccess = 'false';

//     for (let i = 0; i < addresses.length; i++) {
//         const email = addresses[i];

//         if (userEmail.length > 5) {

//             if (email === userEmail) {
//                 grantAccess = 'true';

//             }

//         }

//         if (grantAccess) {
//             console.log('Accesso consentito!');
//         } else {
//             console.log('Accesso negato!');
//         }
//     }
//     checkAccessImproved();





























