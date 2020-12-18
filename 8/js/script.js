// Chiedi un numero di 4 cifre all'utente e calcola la somma di tutte le cifre che compongono il numero.

var userNumber = prompt('Inserisci un numero di 4 cifre');
var somma = 0;
if (userNumber.length !== 4) {
  alert('Errore');
} else {
  for(var i = 0; i < 4; i++) {
    somma += parseInt(userNumber[i]);
  }
}

console.log(somma);
