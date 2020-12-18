// Il software deve chiedere per 5 volte all'utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti. ---VERSIONE FOR---

var counter = 0;
var num;

for (var i = 0; i < 5; i++) {
  num = prompt('Inserisci numero');
  counter += parseInt(num);
}

console.log(counter);
