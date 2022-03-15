// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// chiedo all'utente di scegliere tra pari e dispari controllando anche che non scriva altro
let userEvenOrOddChoice = "";
do {
    userEvenOrOddChoice = prompt("Scegli tra Pari e Dispari", "pari").trim().toLocaleLowerCase();

} while (userEvenOrOddChoice !== "pari" && userEvenOrOddChoice !== "dispari");

// stampo nella console cosa ha scelto l'utente
console.log(`L'utente ha scelto: ${userEvenOrOddChoice}`);

// inizializzo la variabile della scelta del numero dell'utente
let userNumber;

// verifico tramite un ciclo do-while se l'utente ha inserito un Nan oppure numeri non consentiti
do {
    userNumber = parseInt(prompt("Scegli un numero da 1 a 5"));
} while (isNaN(userNumber) || userNumber > 5 || userNumber === 0);

// stampo in console il numero selezionato dall'utente
console.log(`Numero utente: ${userNumber}`)

// richiamo la funzione che mi genera un numero random per il bot
const botNumber = randomNumber(1, 5);

// dichiaro la funzione per generare un numero random in base alle esigenze numeriche del caso
function randomNumber(min, max) {

    range = max - min + 1;
    const randomBotNumber = Math.floor(Math.random() * range) + min;
    return randomBotNumber;

}

// stampo in console il numero random del bot
console.log(`Numero bot: ${botNumber}`);

// sommo i due numeri
const sumUserBot = userNumber + botNumber;

// stampo in console la somma
console.log(`La somma dei due numeri è: ${sumUserBot}`);

// richiamo la funzione che mi dirà se la somma dei due numeri è un numero pari o dispari
const sumResult = checkType(sumUserBot);

// funzione per determinare se la somma è un numero pari o dispari
function checkType(number) {

    // controlla se è pari o dispari con un if e con l'operatore %
    if (number % 2 === 0) {
        resultsEvenOdd = "pari";

    } else {
        resultsEvenOdd = "dispari";
    }

    return resultsEvenOdd;

}

// stampo in console il risultato della funzione ovvero della parità o disparità
console.log(`La somma è un numero ${sumResult}`);

// tramite un if vado a determinare chi ha vinto
if (userEvenOrOddChoice === sumResult) {
    console.log("L'utente vince");
} else {
    console.log("Il Bot vince");
}