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
// function checkAge(age) {

//     let message = '';

//     if (age < 18) {
//         message = `Sei troppo giovane! Hai ${age} anni!`;

//     } else {
//         message = "Hai più di 18 anni!";

//     }
//     return message
// }
// console.log(checkAge(17)); ; //Quando chiamiamo checkAge(), prima usciva undefined poichè eseguirà solo else perchè myAge è impostato su 32 anni, in più  non staiamo facendo nulla con quel messaggio se non memorizzandolo nel messaggio variabile.
//ora invece qualsiasi parametro "eta" gli passi a checkAge(), ti dirà se hai più o meno di 18 anni



//  // ESERCIZIO 2 è scritto male lenght va scritto cosi length
//  function printColorsNumber() {
//      const colors = ['blue', 'red', 'yellow', 'green', 'black'];
//     console.log(`Nella mia palette ci sono ${colors.length} colori!`);
//  }
//  printColorsNumber();


// // ESERCIZIO 3 sta facendo la concatenazione e non l'addizione, aggiungendo parseInt al prompt riceveremo un numero e allora fara l'addizione
//  function addNumbers() {
//    const userNumber = parseInt(prompt('Inserisci un numero'));
//     const total = userNumber + 12;

//      console.log(`Il risultato finale è ${total}`);
//  }
// addNumbers();


// // // ESERCIZIO 4 ora funziona controlla se l'email che inserisce l'utente è tra quelle con accesso consentito
function checkAccess() {
     const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];
    const userEmail = prompt('Inserisci il tuo indirizzo email');

   let grantAccess = "false"; //era messo negli apici 

    if (addresses.includes(userEmail)) {
         grantAccess = "true"; 
     }

    if (grantAccess === "true") { //qui invece no
         console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
 }
 checkAccess(); 


// // // ESERCIZIO 5 (suggerimento: c'è un solo errore) errore di scrittura mancava la graffa prima dell'ultimo if 
//  function checkAccessImproved() {
//      const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];

//     const userEmail = prompt('Inserisci il tuo indirizzo email');

//     let grantAccess = "false";

//      for (let i = 0; i < addresses.length; i++) {
//          const email = addresses[i];

//         if (userEmail.length > 5) {

//              if (email === userEmail) {
//                 grantAccess = "true"; 

//             }

//          }
//         } //qui

//         if (grantAccess === "true") {
//              console.log('Accesso consentito!');
//          } else {
//             console.log('Accesso negato!');
//          }
    
// }
//     checkAccessImproved();





























