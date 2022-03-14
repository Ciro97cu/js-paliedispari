// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

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