// Il software deve chiedere per 5 volte all'utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti. ---VERSIONE WHILE---

var counter = 0;
var num;
var i = 0;

while (i < 5) {
  num = prompt('Inserisci numero');
  counter += parseInt(num);
  i++;
}

console.log(counter);
