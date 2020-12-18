// Stampa il cubo dei primi N numeri, dove N è un numero indicato dall'utente. Imponi il limite di 10.

var numero = parseInt(prompt('Inserisci un numero'));
if(numero > 10) {
  alert('Inserisci numero minore di 10')
} else {
  for(i = 1; i <= numero; i++) {
    console.log(Math.pow(i, 3));
  }
}
