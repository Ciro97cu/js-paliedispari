// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// chiedo all'utente di scrivere la parola da controllare
const userString = prompt("Inserisci una parola", "Onorarono").trim().toLowerCase();

// richiamo la funzione palindroma
const wordPlaidroma = palidroma(userString);

// funzione per invertire la stringa e poi verificare se è palindroma
function palidroma(wordToCheck) {
    let result = "";
    // imposto il ciclo for in modo che parta dall'ultima lettera e proceda all'indietro
    for (let i = wordToCheck.length - 1; i >= 0; i--) {
        result += wordToCheck[i];
    }
    let palOrNot;
    // verifico se le due stringhe sono polindrome
    if (userString === result) {
        palOrNot = "Palidroma";
    } else {
        palOrNot = "No Palidroma";
    }
    return palOrNot;

}
// stampo nella console il risultato
console.log(wordPlaidroma);

/* VERSIONE RISTRETTA
const userString = prompt("Inserisci una parola", "Onorarono").trim().toLowerCase();

const wordPlaidroma = palidroma(userString);

function palidroma(wordToCheck) {
    let result = wordToCheck.split("").reverse().join("");
    let palOrNot;
    if (userString === result) {
        palOrNot = "Palidroma";
    } else {
        palOrNot = "No Palidroma";
    }
    return palOrNot;
}

console.log(wordPlaidroma);
*/