// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array.

var oddArray = [];
var n;

for(var i = 0; i < 6; i++) {
  n = parseInt(prompt('Inserisci un numero'));

  if(n % 2 !== 0) {
    oddArray.push(n);
  }
}

console.log(oddArray);
