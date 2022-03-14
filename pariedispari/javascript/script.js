// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

const userEvenOrOddChoice = prompt("Scegli tra Pari e Dispari", "pari").trim();

let choice = false;

if (userEvenOrOddChoice === "pari") {
    choice = true;
} else if (userEvenOrOddChoice === "dispari") {
    choice = false;
}

console.log(choice);

let userNumber;

do {
    userNumber = parseInt(prompt("Scegli un numero da 1 a 5"));
} while (isNaN(userNumber) || userNumber > 5 || userNumber === 0);

console.log(`Numero utente: ${userNumber}`)

const botNumber = randomNumber(1, 5);

function randomNumber(min, max) {

    range = max - min + 1;
    const randomBotNumber = Math.floor(Math.random() * range) + min;
    return randomBotNumber;

}

console.log(`Numero bot: ${botNumber}`);

const sumUserBot = userNumber + botNumber;

console.log(`La somma dei due numeri è: ${sumUserBot}`);

const sumResult = checkType(sumUserBot);

function checkType(number) {

    if (number % 2 === 0) {
        resultsEvenOdd = "La somma dei due numeri è un numero pari";

    } else {
        resultsEvenOdd = "La somma dei due numeri è un numero dispari";
    }

    return resultsEvenOdd;

}

console.log(sumResult);

let resultWinner;

if (choice === controlResult) {
    resultWinner = "Human Win";
} else {
    resultWinner = "Bot Win"
}

console.log(resultWinner);